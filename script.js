tinymce.init({
    selector: 'textarea#message',
    plugins: 'lists link image table code help wordcount'
});

tinymce.init({
    selector: 'textarea#messageReport',
    plugins: 'lists link image table code help wordcount',
});

var InfoBubble;
const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasExample'));
const dataAdDetailsInnerHTML = document.getElementById('rightSidePanelBody');

var checkbox = document.getElementById('flexSwitchCheckChecked1');
var toggleReportMarker = document.getElementById('flexSwitchCheckChecked2');
var reportAdBannerDialog = document.getElementById("reportAdBannerDialog");
var reportDetailDialog = document.getElementById("reportDetailDialog")
var closeButtonAdBannerDialog = document.getElementsByClassName("closeAdBannerDialog")[0];
var closeButtonReportDialog = document.getElementById("closeReportDetailDialog")
var pInformation = document.getElementById("popupInformation");
var clusteringLayer
var selectedReport
var bottomReportDialog = document.getElementById("reportDialogModal")
var placeDetails = []
var placeDetailsTmp = []
var adBannerID = null

closeButtonAdBannerDialog.onclick = function () { reportAdBannerDialog.style.display = "none"; }
closeButtonReportDialog.onclick = function () { reportDetailDialog.style.display = "none"; }

var searchPlaces = []
var groupReportMarker
var report
var airports
var latX = 0
var lngY = 0
var defaultTheme
var isLocationReport = false

function startClustering(map, data) {
    var dataPoints = data.map(function (item) {
        return new H.clustering.DataPoint(item.latitude, item.longitude, null, item)
    })

    var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
            eps: 20,
            minWeight: 2
        },
        // theme: customTheme
    })

    defaultTheme = clusteredDataProvider.getTheme();

    clusteredDataProvider.setTheme(CUSTOM_THEME)

    clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider)
    map.addLayer(clusteringLayer)
}


var CUSTOM_THEME = {
    getClusterPresentation: function (cluster) {
        //Keep the default theme for clusters
        var clusterMarker = defaultTheme.getClusterPresentation.call(defaultTheme, cluster);
        return clusterMarker;
    },
    getNoisePresentation: function (noisePoint) {
        var data = noisePoint.getData()

        var iconColor = 'blue';
        if (data.quyhoach === "CHƯA QUY HOẠCH")
            iconColor = 'red';

        const iconUrl = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="10" fill="${iconColor}" stroke="white" stroke-width="1"/> 
            <path d="M6.75 14.0322C6.32031 14.0322 5.96224 13.9391 5.67578 13.7529C5.38932 13.5667 5.15658 13.3197 4.97754 13.0117C4.80566 12.7038 4.67318 12.3672 4.58008 12.002C4.49414 11.6296 4.43685 11.2536 4.4082 10.874C4.37956 10.4945 4.36523 10.1436 4.36523 9.82129C4.36523 9.49902 4.37956 9.14811 4.4082 8.76855C4.43685 8.389 4.49414 8.0166 4.58008 7.65137C4.67318 7.27897 4.80566 6.9388 4.97754 6.63086C5.15658 6.32292 5.38932 6.07585 5.67578 5.88965C5.96224 5.70345 6.32031 5.61035 6.75 5.61035C7.17969 5.61035 7.53776 5.70345 7.82422 5.88965C8.11784 6.07585 8.35059 6.32292 8.52246 6.63086C8.69434 6.9388 8.82324 7.28255 8.90918 7.66211C9.00228 8.03451 9.06315 8.41048 9.0918 8.79004C9.12044 9.1696 9.13477 9.52051 9.13477 9.84277C9.13477 10.3011 9.10612 10.7773 9.04883 11.2715C8.99154 11.7585 8.86979 12.2132 8.68359 12.6357L9.28516 13.3555L8.78027 14.0322L8.25391 13.377C8.06055 13.599 7.83496 13.7637 7.57715 13.8711C7.31934 13.9785 7.04362 14.0322 6.75 14.0322ZM6.75 13.1191C7.13672 13.1191 7.44108 12.9616 7.66309 12.6465L6.50293 11.1963L6.98633 10.584L7.99609 11.7979C8.06055 11.4827 8.10352 11.1641 8.125 10.8418C8.14648 10.5124 8.15723 10.1865 8.15723 9.86426C8.15723 9.68522 8.15007 9.45605 8.13574 9.17676C8.12858 8.89746 8.09993 8.60742 8.0498 8.30664C8.00684 7.9987 7.93522 7.70866 7.83496 7.43652C7.7347 7.16439 7.59505 6.94596 7.41602 6.78125C7.24414 6.60938 7.02214 6.52344 6.75 6.52344C6.47786 6.52344 6.25228 6.60579 6.07324 6.77051C5.90137 6.93522 5.7653 7.15007 5.66504 7.41504C5.56478 7.68001 5.48958 7.96289 5.43945 8.26367C5.39648 8.56445 5.36784 8.85449 5.35352 9.13379C5.34635 9.40592 5.34277 9.63509 5.34277 9.82129C5.34277 10.0003 5.34635 10.2295 5.35352 10.5088C5.36784 10.7881 5.39648 11.0781 5.43945 11.3789C5.48958 11.6797 5.56478 11.9626 5.66504 12.2275C5.7653 12.4925 5.90137 12.7074 6.07324 12.8721C6.25228 13.0368 6.47786 13.1191 6.75 13.1191ZM12.4326 14.0322C11.9814 14.0322 11.6019 13.9463 11.2939 13.7744C10.9932 13.5954 10.7461 13.3626 10.5527 13.0762C10.3665 12.7826 10.2233 12.4531 10.123 12.0879C10.0228 11.7227 9.95475 11.3503 9.91895 10.9707C9.88314 10.584 9.86523 10.2152 9.86523 9.86426C9.86523 9.52767 9.88314 9.16602 9.91895 8.7793C9.96191 8.39258 10.0335 8.01302 10.1338 7.64062C10.2412 7.26823 10.3916 6.92806 10.585 6.62012C10.7783 6.31217 11.0218 6.0651 11.3154 5.87891C11.6162 5.69271 11.985 5.59961 12.4219 5.59961C12.9017 5.59961 13.2848 5.71061 13.5713 5.93262C13.8577 6.15462 14.0726 6.44824 14.2158 6.81348C14.359 7.17155 14.4521 7.56185 14.4951 7.98438H13.4746C13.4531 7.77669 13.4066 7.55827 13.335 7.3291C13.2705 7.09993 13.1667 6.90658 13.0234 6.74902C12.8802 6.59147 12.6761 6.5127 12.4111 6.5127C12.1104 6.5127 11.8633 6.59863 11.6699 6.77051C11.4766 6.93522 11.3226 7.15365 11.208 7.42578C11.1006 7.69076 11.0182 7.97721 10.9609 8.28516C10.9108 8.5931 10.8786 8.89388 10.8643 9.1875C10.8499 9.47396 10.8428 9.72103 10.8428 9.92871C10.8428 10.1292 10.8499 10.3656 10.8643 10.6377C10.8786 10.9098 10.9108 11.1891 10.9609 11.4756C11.0111 11.762 11.0898 12.0306 11.1973 12.2812C11.3047 12.5319 11.4515 12.736 11.6377 12.8936C11.8239 13.0439 12.0602 13.1191 12.3467 13.1191C12.6331 13.1191 12.8587 13.0296 13.0234 12.8506C13.1953 12.6715 13.3278 12.4567 13.4209 12.2061C13.514 11.9482 13.582 11.7048 13.625 11.4756H14.6455C14.5954 11.7835 14.5202 12.0915 14.4199 12.3994C14.3197 12.7002 14.1836 12.9759 14.0117 13.2266C13.8398 13.4701 13.625 13.667 13.3672 13.8174C13.1094 13.9606 12.7979 14.0322 12.4326 14.0322Z" fill="white"/>
            </svg>`;
        // Get a reference to data object our noise points
        // Create a marker for the noisePoint
        var noiseMarker = new H.map.Marker(noisePoint.getPosition(), {
            // Use min zoom from a noise point
            // to show it correctly at certain zoom levels:
            min: noisePoint.getMinZoom(),
            icon: new H.map.Icon(iconUrl, {
                size: { w: 20, h: 20 },
                anchor: { x: 10, y: 10 }
            })
        });

        // Link a data from the point to the marker
        // to make it accessible inside onMarkerClick
        noiseMarker.setData(
            `<div class="place-info">
                <b>${data.hinhThuc}</b>
                <p>${data.loaiVT}</p>
                <p>${data.diaChi}, ${data.khuVuc}</p>
                <b><i>${data.quyHoach}</i></b>
                <img class="img-place" src="${data.hinhAnh}">
                <button class='detailedAdSign' onclick="detailAdButtonClicked('${data.id}')">Chi tiết</button>
            </div>`
        );

        noiseMarker.addEventListener('tap', function (evt) {
            InfoBubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
                // read custom data
                content: evt.target.getData()
            });
            // show info bubble
            ui.addBubble(InfoBubble);
        }, false);

        return noiseMarker;
    }
};

function getRandomDataPoint(cluster) {
    var dataPoints = [];

    // Iterate through all points which fall into the cluster and store references to them
    cluster.forEachDataPoint(dataPoints.push.bind(dataPoints));

    // Randomly pick an index from [0, dataPoints.length) range
    // Note how we use bitwise OR ("|") operator for that instead of Math.floor
    return dataPoints[Math.random() * dataPoints.length | 0];
}

// /**
//  * CLICK/TAP event handler for our markers. That marker can represent either a single photo or
//  * a cluster (group of photos)
//  * @param {H.mapevents.Event} e The event object
//  */
// function onMarkerClick(e) {
//     // Get position of the "clicked" marker
//     var position = e.target.getGeometry(),
//         // Get the data associated with that marker
//         data = e.target.getData(),
//         // Merge default template with the data and get HTML
//         bubbleContent = getBubbleContent(data),
//         bubble = onMarkerClick.bubble;

//     // For all markers create only one bubble, if not created yet
//     if (!bubble) {
//         bubble = new H.ui.InfoBubble(position, {
//             content: bubbleContent
//         });
//         ui.addBubble(bubble);
//         // Cache the bubble object
//         onMarkerClick.bubble = bubble;
//     } else {
//         // Reuse existing bubble object
//         bubble.setPosition(position);
//         bubble.setContent(bubbleContent);
//         bubble.open();
//     }

//     // Move map's center to a clicked marker
//     map.setCenter(position, true);
// }

function closeAdDetailRightSidePanel() {
    offcanvas.hide()
}

function sendAdBannerReportButtonClicked() {
    event.preventDefault();

    // var name = document.getElementById('firstname').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    // var editor = tinymce.get("message").getContent();

    // /var formData = new FormData(document.getElementById('adBannerDialogReportForm'));
    tinymce.triggerSave(true, true);

    const formData = new FormData(document.getElementById('adBannerDialogReportForm'));
    formData.append('lat', latX);
    formData.append('lng', lngY);
    formData.append('isLocationReport', isLocationReport)
    formData.append('adBannerID', adBannerID)
    const urlSearchParams = new URLSearchParams(formData);


    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlSearchParams,
    })
        .then(response => response.json())
        .then(data => {
            console.log("form submitted: ", data.response);
            if (data.response == "Successful" && data.message == "") {
                Toastify({
                    text: "Báo cáo thành công!",
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#22bb33",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();

                addReportMarker(groupReportMarker, { lat: latX, lng: lngY })
            }
            else {
                Toastify({
                    text: data.message,
                    duration: 3000,
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "#f0ad4e",
                    },
                    onClick: function () { } // Callback after click
                }).showToast();
            }
        })
        .catch(error => {
            console.log('ERROR: ', error);
            Toastify({
                text: 'Đã có lỗi xảy ra trong quá trình xử lý!',
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                    background: "#bb2124",
                },
                onClick: function () { } // Callback after click
            }).showToast();
        });
}

function openLogin() {
    document.querySelector('#login-section').style.display = 'flex';
}
function closeLogin() {
    document.querySelector('#login-section').style.display = 'none';
}

function moveMapToKHTN(map) {
    map.setCenter({ lat: 10.76316473604989, lng: 106.68238541539267 });
    map.setZoom(15);
}

function onReportAdBannerClicked(lx, ly, reportType, adID) {
    latX = lx
    lngY = ly
    isLocationReport = reportType
    adBannerID = adID
    reportAdBannerDialog.style.display = "block";
}

function onReportDetailDialogClicked(reportername, reporteremail, reporterphonenumber, typeofreport, reportcontent, imagepath1, imagepath2) {
    reportDetailDialog.style.display = "block";
    document.getElementById("firstnameReport").value = reportername
    document.getElementById("emailReport").value = reporteremail
    document.getElementById("phoneReport").value = reporterphonenumber
    document.getElementById("lastnameReport").value = typeofreport
    tinymce.get("messageReport").setContent(reportcontent)
    document.getElementById("imgReportDetail1").src = imagepath1
    document.getElementById("imgReportDetail2").src = imagepath2
}

function detailAdButtonClicked(placeID) {

    offcanvas.show()

    var popupInformationInnerHTML = "";

    // var popup = document.getElementById("popup");
    // popup.style.display = "block";

    // var closePopupButton = document.getElementById("closePopup");
    // closePopupButton.addEventListener("click", function() {
    //     popup.style.display = "none";
    // });

    $(document).ready(function () {
        $.ajax({
            url: "/get-ad-details/" + placeID,
            method: "GET",
            success: function (response) {
                var placeDetails = response.placeDetails;

                console.log("abc");
                console.log(placeDetails)

                const groupAdDetail = {}
                placeDetails.forEach(pds => {
                    const key = `${pds.stt}`

                    if (!groupAdDetail[key])
                        groupAdDetail[key] = {
                            id: pds.id,
                            diaChi: pds.diaChi,
                            khuVuc: pds.khuVuc,
                            loaiVT: pds.loaiVT,
                            hinhThuc: pds.hinhThuc,
                            hinhAnh: pds.hinhAnh,
                            quyHoach: pds.quyHoach,
                            latitude: pds.latitude,
                            longitude: pds.longitude,
                            placeId: pds.placeId,
                            adName: pds.adName,
                            adSize: pds.adSize,
                            adQuantity: pds.adQuantity,
                            expireDay: pds.expireDay,
                            imagePath: pds.imagePath,
                            adBannerId: pds.adbannerid,
                            reports: []
                        }

                    groupAdDetail[key].reports.push({
                        id: pds.id,
                        lat: pds.lat,
                        lng: pds.lng,
                        reportername: pds.reportername,
                        typeofreport: pds.typeofreport,
                        reporteremail: pds.reporteremail,
                        reporterphonenumber: pds.reporterphonenumber,
                        reportcontent: pds.reportcontent,
                        imagepath1: pds.imagepath1,
                        imagepath2: pds.imagepath2,
                        locationreport: pds.locationreport,
                        adbannerreportid: pds.adbannerreportid,
                    });
                })

                placeDetails = Object.values(groupAdDetail)
                placeDetailsTmp = placeDetails

                console.log(placeDetails)

                for (let i = 0; i < placeDetails.length; i++) {
                    var jsDate = new Date(placeDetails[i].expireDay);
                    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
                    var formattedDate = jsDate.toLocaleDateString('vi-VN', options);
                    console.log(placeDetails[i].reports)

                    popupInformationInnerHTML += !placeDetails[i].reports[0].id ? 
                        `<div class="place-detail-information">
                            <b>${placeDetails[i].adName}</b>
                            <p>${placeDetails[i].diaChi} - ${placeDetails[i].khuVuc}</p>
                            <p>Kích thước: ${placeDetails[i].adSize}</p>
                            <p>Số lượng: <b>${placeDetails[i].adQuantity}</b></p>
                            <p>Hình thức: <b>${placeDetails[i].hinhThuc}</b></p>
                            <p>Phân loại: <b>${placeDetails[i].loaiVT}</b></p>
                            <div class="placeDetailsButtonContainer">
                                <a class="placeDetailsButton" href="${placeDetails[i].imgagePath}" data-lightbox="detail-pano-${placeDetails[i].id}" data-title="Ngày hết hạn: ${formattedDate}">
                                    <img src="./assets/img/icon_info.png" width="25px" height="25px">
                                </a>
                            
                                <div style="border: 2px solid #dc4f52; border-radius: 3px;">
                                <button class="placeDetailsButton textWithImageButton" onclick="onReportAdBannerClicked(${placeDetails[i].latitude}, ${placeDetails[i].longitude}, false, ${placeDetails[i].adBannerId})">
                                    <span>
                                        <img src="./assets/img/icon_warning.png" width="25px" height="25px" style="margin-right: 6px; alt="no image">
                                    </span>
                                    BÁO CÁO VI PHẠM
                                </button>
                                </div>
                            </div>
                        </div>` :
                        `<div class="place-detail-information">
                            <b>${placeDetails[i].adName}</b>
                            <p>${placeDetails[i].diaChi} - ${placeDetails[i].khuVuc}</p>
                            <p>Kích thước: ${placeDetails[i].adSize}</p>
                            <p>Số lượng: <b>${placeDetails[i].adQuantity}</b></p>
                            <p>Hình thức: <b>${placeDetails[i].hinhThuc}</b></p>
                            <p>Phân loại: <b>${placeDetails[i].loaiVT}</b></p>
                            <div class="placeDetailsButtonContainer">
                                <div>
                                    <a class="placeDetailsButton" href="${placeDetails[i].imagePath}" data-lightbox="detail-pano-${placeDetails[i].id}" data-title="Ngày hết hạn: ${formattedDate}">
                                        <img src="./assets/img/icon_info.png" width="25px" height="25px">
                                    </a>
                                    <img src="./assets/img/clipboard.svg" width="25px" height="25px" onclick="showReportBottomDialogFromAdBannerDetail(${i})">
                                </div>

                                <div style="border: 2px solid #dc4f52; border-radius: 3px;">
                                <button class="placeDetailsButton textWithImageButton" onclick="onReportAdBannerClicked(${placeDetails[i].latitude}, ${placeDetails[i].longitude}, false, ${placeDetails[i].adBannerId})">
                                    <span>
                                        <img src="./assets/img/icon_warning.png" width="25px" height="25px" style="margin-right: 6px; alt="no image">
                                    </span>
                                    BÁO CÁO VI PHẠM
                                </button>
                                </div>
                            </div>
                        </div>`;
                }

                // console.log(popupInformationInnerHTML);
                // pInformation.innerHTML = popupInformationInnerHTML;
                // dataAdDetailsInnerHTML.innerHTML = '<span class="close-button" id="closeButton" onclick="closeAdDetailRightSidePanel()">X</span><h2>Thông tin chi tiết</h2>' + popupInformationInnerHTML;
                // <span class="closeAdBannerDialog">&times;</span>
                dataAdDetailsInnerHTML.innerHTML = popupInformationInnerHTML;
                // console.log(dataAdDetailsInnerHTML.innerHTML);
            }
        });
    });
}

function addMarkerToGroup(group, coordinate, html, quyhoach) {
    var iconColor = 'blue';
    if (quyhoach === "CHƯA QUY HOẠCH")
        iconColor = 'red';

    const iconUrl = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="${iconColor}" stroke="white" stroke-width="1"/> 
    <path d="M6.75 14.0322C6.32031 14.0322 5.96224 13.9391 5.67578 13.7529C5.38932 13.5667 5.15658 13.3197 4.97754 13.0117C4.80566 12.7038 4.67318 12.3672 4.58008 12.002C4.49414 11.6296 4.43685 11.2536 4.4082 10.874C4.37956 10.4945 4.36523 10.1436 4.36523 9.82129C4.36523 9.49902 4.37956 9.14811 4.4082 8.76855C4.43685 8.389 4.49414 8.0166 4.58008 7.65137C4.67318 7.27897 4.80566 6.9388 4.97754 6.63086C5.15658 6.32292 5.38932 6.07585 5.67578 5.88965C5.96224 5.70345 6.32031 5.61035 6.75 5.61035C7.17969 5.61035 7.53776 5.70345 7.82422 5.88965C8.11784 6.07585 8.35059 6.32292 8.52246 6.63086C8.69434 6.9388 8.82324 7.28255 8.90918 7.66211C9.00228 8.03451 9.06315 8.41048 9.0918 8.79004C9.12044 9.1696 9.13477 9.52051 9.13477 9.84277C9.13477 10.3011 9.10612 10.7773 9.04883 11.2715C8.99154 11.7585 8.86979 12.2132 8.68359 12.6357L9.28516 13.3555L8.78027 14.0322L8.25391 13.377C8.06055 13.599 7.83496 13.7637 7.57715 13.8711C7.31934 13.9785 7.04362 14.0322 6.75 14.0322ZM6.75 13.1191C7.13672 13.1191 7.44108 12.9616 7.66309 12.6465L6.50293 11.1963L6.98633 10.584L7.99609 11.7979C8.06055 11.4827 8.10352 11.1641 8.125 10.8418C8.14648 10.5124 8.15723 10.1865 8.15723 9.86426C8.15723 9.68522 8.15007 9.45605 8.13574 9.17676C8.12858 8.89746 8.09993 8.60742 8.0498 8.30664C8.00684 7.9987 7.93522 7.70866 7.83496 7.43652C7.7347 7.16439 7.59505 6.94596 7.41602 6.78125C7.24414 6.60938 7.02214 6.52344 6.75 6.52344C6.47786 6.52344 6.25228 6.60579 6.07324 6.77051C5.90137 6.93522 5.7653 7.15007 5.66504 7.41504C5.56478 7.68001 5.48958 7.96289 5.43945 8.26367C5.39648 8.56445 5.36784 8.85449 5.35352 9.13379C5.34635 9.40592 5.34277 9.63509 5.34277 9.82129C5.34277 10.0003 5.34635 10.2295 5.35352 10.5088C5.36784 10.7881 5.39648 11.0781 5.43945 11.3789C5.48958 11.6797 5.56478 11.9626 5.66504 12.2275C5.7653 12.4925 5.90137 12.7074 6.07324 12.8721C6.25228 13.0368 6.47786 13.1191 6.75 13.1191ZM12.4326 14.0322C11.9814 14.0322 11.6019 13.9463 11.2939 13.7744C10.9932 13.5954 10.7461 13.3626 10.5527 13.0762C10.3665 12.7826 10.2233 12.4531 10.123 12.0879C10.0228 11.7227 9.95475 11.3503 9.91895 10.9707C9.88314 10.584 9.86523 10.2152 9.86523 9.86426C9.86523 9.52767 9.88314 9.16602 9.91895 8.7793C9.96191 8.39258 10.0335 8.01302 10.1338 7.64062C10.2412 7.26823 10.3916 6.92806 10.585 6.62012C10.7783 6.31217 11.0218 6.0651 11.3154 5.87891C11.6162 5.69271 11.985 5.59961 12.4219 5.59961C12.9017 5.59961 13.2848 5.71061 13.5713 5.93262C13.8577 6.15462 14.0726 6.44824 14.2158 6.81348C14.359 7.17155 14.4521 7.56185 14.4951 7.98438H13.4746C13.4531 7.77669 13.4066 7.55827 13.335 7.3291C13.2705 7.09993 13.1667 6.90658 13.0234 6.74902C12.8802 6.59147 12.6761 6.5127 12.4111 6.5127C12.1104 6.5127 11.8633 6.59863 11.6699 6.77051C11.4766 6.93522 11.3226 7.15365 11.208 7.42578C11.1006 7.69076 11.0182 7.97721 10.9609 8.28516C10.9108 8.5931 10.8786 8.89388 10.8643 9.1875C10.8499 9.47396 10.8428 9.72103 10.8428 9.92871C10.8428 10.1292 10.8499 10.3656 10.8643 10.6377C10.8786 10.9098 10.9108 11.1891 10.9609 11.4756C11.0111 11.762 11.0898 12.0306 11.1973 12.2812C11.3047 12.5319 11.4515 12.736 11.6377 12.8936C11.8239 13.0439 12.0602 13.1191 12.3467 13.1191C12.6331 13.1191 12.8587 13.0296 13.0234 12.8506C13.1953 12.6715 13.3278 12.4567 13.4209 12.2061C13.514 11.9482 13.582 11.7048 13.625 11.4756H14.6455C14.5954 11.7835 14.5202 12.0915 14.4199 12.3994C14.3197 12.7002 14.1836 12.9759 14.0117 13.2266C13.8398 13.4701 13.625 13.667 13.3672 13.8174C13.1094 13.9606 12.7979 14.0322 12.4326 14.0322Z" fill="white"/>
    </svg>`;
    const icon = new H.map.Icon(iconUrl);

    var marker = new H.map.Marker(coordinate, { icon: icon });
    // add custom data to the marker
    marker.setData(html);
    group.addObject(marker);
}

function addInfoBubble(map) {
    var group = new H.map.Group();

    map.addObject(group);

    group.addEventListener('tap', function (evt) {
        InfoBubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
            // read custom data
            content: evt.target.getData()
        });
        // show info bubble
        ui.addBubble(InfoBubble);
    }, false);

    $(document).ready(function () {
        $.ajax({
            url: "/get-place",
            method: "GET",
            success: function (response) {
                var place = response.place;
                var airports = response.place;
                console.log(airports)
                startClustering(map, airports);
            }
        });
    });
}

function addReportMarker(group, coordinate, data) {
    const iconUrl = `<svg height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve">
    <path style="fill:#ED8A19;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z"/>
    </svg>`;
    const icon = new H.map.Icon(iconUrl);

    let reportMarker = new H.map.Marker(coordinate, { icon: icon });
    // add custom data to the marker
    // marker.setData(html);
    reportMarker.setData(data)
    group.addObject(reportMarker);
}

function showReportBottomDialog(data) {
    data = JSON.parse(data)
    bottomReportDialog.style.display = 'flex'

    let locationReportDetail = ""

    data.forEach(obj => {
        // reportername, reporteremail, reporterphonenumber, typeofreport, reportcontent, imagepath1, imagepath2
        locationReportDetail +=
        `<div class="report-detail-information" style="margin: 5px;" onclick="onReportDetailDialogClicked('${obj.reportername}', '${obj.reporteremail}', '${obj.reporterphonenumber}', '${obj.typeofreport}', '${obj.reportcontent}', '${obj.imagepath1}', '${obj.imagepath2}')">
            <p><b>Số thứ tự:</b> ${obj.id}</p>
            <p><b>Phân loại:</b> ${obj.typeofreport}</p>
        </div>`;
    })

    bottomReportDialog.innerHTML = locationReportDetail
}

function showReportBottomDialogFromAdBannerDetail(i) {
    data = placeDetailsTmp[i].reports
    bottomReportDialog.style.display = 'flex'

    let locationReportDetail = ""

    data.forEach(obj => {
        // reportername, reporteremail, reporterphonenumber, typeofreport, reportcontent, imagepath1, imagepath2
        locationReportDetail +=
        `<div class="report-detail-information" style="margin: 5px;" onclick="onReportDetailDialogClicked('${obj.reportername}', '${obj.reporteremail}', '${obj.reporterphonenumber}', '${obj.typeofreport}', '${obj.reportcontent}', '${obj.imagepath1}', '${obj.imagepath2}')">
            <p><b>Số thứ tự:</b> ${obj.id}</p>
            <p><b>Phân loại:</b> ${obj.typeofreport}</p>
        </div>`;
    })

    bottomReportDialog.innerHTML = locationReportDetail
}

function getReportMarker(map) {
    groupReportMarker = new H.map.Group();

    map.addObject(groupReportMarker);

    groupReportMarker.addEventListener('tap', function (evt) {
        console.log(evt.target.getData())

        showReportBottomDialog(JSON.stringify(evt.target.getData()))

        // let locationReportDetail = ""

        // evt.target.getData().forEach(obj => {
        //     // reportername, reporteremail, reporterphonenumber, typeofreport, reportcontent, imagepath1, imagepath2
        //     locationReportDetail +=
        //     `<div class="report-detail-information" style="margin: 5px;" onclick="onReportDetailDialogClicked('${obj.reportername}', '${obj.reporteremail}', '${obj.reporterphonenumber}', '${obj.typeofreport}', '${obj.reportcontent}', '${obj.imagepath1}', '${obj.imagepath2}')">
        //         <p><b>Số thứ tự:</b> ${obj.id}</p>
        //         <p><b>Phân loại:</b> ${obj.typeofreport}</p>
        //     </div>`;
        // })

        // bottomReportDialog.innerHTML = locationReportDetail

    }, false);

    // groupReportMarker.addEventListener('tap', function (evt) {
    //     InfoBubble = new H.ui.InfoBubble(evt.target.getGeometry(), {
    //         // read custom data
    //         content: evt.target.getData()
    //     });
    //     // show info bubble
    //     ui.addBubble(InfoBubble);
    // }, false);

    $(document).ready(function () {
        $.ajax({
            url: "/get-report",
            method: "GET",
            success: function (response) {
                report = response.report;

                const groupedReports = {}
                report.forEach(rpt => {
                    const key = `${rpt.lat}_${rpt.lng}`

                    if (!groupedReports[key])
                        groupedReports[key] = {
                            lat: rpt.lat,
                            lng: rpt.lng,
                            data: []
                        }

                    groupedReports[key].data.push({
                        id: rpt.id,
                        adbannerreportid: rpt.adbannerreportid,
                        imagepath1: rpt.imagepath1,
                        imagepath2: rpt.imagepath2,
                        locationreport: rpt.locationreport,
                        reportcontent: rpt.reportcontent,
                        reporteremail: rpt.reporteremail,
                        reportername: rpt.reportername,
                        reporterphonenumber: rpt.reporterphonenumber,
                        typeofreport: rpt.typeofreport
                    });
                })

                const result = Object.values(groupedReports)

                result.forEach(rst => {
                    addReportMarker(groupReportMarker, { lat: rst.lat, lng: rst.lng }, rst.data);
                })

                // for (let i = 0; i < report.length; i++) 
                //     // console.log(report[i].lat + " - " + report[i].lng)
                //     addReportMarker(groupReportMarker, { lat: report[i].lat, lng: report[i].lng }, report[i]);
            }
        });
    });
}

const apiKey = "ylfzo_XrCL0wFOWqMdk89chLwml3by9ZPi5U6J-S3EU";
var platform = new H.service.Platform({
    apikey: apiKey
});
var defaultLayers = platform.createDefaultLayers(
    {
        lg: 'vi'
    }
);

var map = new H.Map(document.getElementById('map'),
    defaultLayers.vector.normal.map, {
    center: { lat: 10.76316473604989, lng: 106.68238541539267 },
    zoom: 4,
    pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());

var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
window.onload = function () {
    moveMapToKHTN(map);
}

// Now use the map as required...
addInfoBubble(map);
getReportMarker(map)

checkbox.addEventListener('change', function () {
    let markersVisible = checkbox.checked;

    if (!markersVisible)
        map.removeLayer(clusteringLayer)
    else
        map.addLayer(clusteringLayer)
})

toggleReportMarker.addEventListener('change', function () {
    let markersVisible = toggleReportMarker.checked;

    if (!markersVisible)
        map.removeObject(groupReportMarker)
    else
        map.addObject(groupReportMarker)
})

let bubble, marker, bubbleElement, bubbleClose;
map.addEventListener('tap', function (evt) {

    if (evt.target instanceof H.Map) {
        bottomReportDialog.style.display = "none"
    }

    if (bubble) {
        marker.setVisibility(false);
    }
    let { lat, lng } = map.screenToGeo(
        evt.currentPointer.viewportX,
        evt.currentPointer.viewportY,
    );

    const iconUrl = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 90 c -1.415 0 -2.725 -0.748 -3.444 -1.966 l -4.385 -7.417 C 28.167 65.396 19.664 51.02 16.759 45.189 c -2.112 -4.331 -3.175 -8.955 -3.175 -13.773 C 13.584 14.093 27.677 0 45 0 c 17.323 0 31.416 14.093 31.416 31.416 c 0 4.815 -1.063 9.438 -3.157 13.741 c -0.025 0.052 -0.053 0.104 -0.08 0.155 c -2.961 5.909 -11.41 20.193 -20.353 35.309 l -4.382 7.413 C 47.725 89.252 46.415 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,61,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 45.678 c -8.474 0 -15.369 -6.894 -15.369 -15.368 S 36.526 14.941 45 14.941 c 8.474 0 15.368 6.895 15.368 15.369 S 53.474 45.678 45 45.678 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(156,37,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>';

    const icon = new H.map.Icon(iconUrl);
    marker = new H.map.Marker({ lat, lng }, { icon: icon });
    map.addObject(marker);
    const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=vi-VN&apiKey=${apiKey}`;
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            if (data.items && data.items.length > 0) {
                var address = data.items[0].address;
                let content = '<div style="width:250px;"><i class="fa-regular fa-circle-check" style="color: #00a832; margin-right:5px;"></i><b>Thông tin địa điểm</b> <br />' + address.label + '</div>' +
                    `
                <div style="border: 2px solid #dc4f52; border-radius: 3px;">
                    <button class="placeDetailsButton textWithImageButton" onclick="onReportAdBannerClicked(${lat}, ${lng}, true, null)">
                        <span>
                            <img src="./assets/img/icon_warning.png" width="25px" height="25px" style="margin-right: 6px; alt="no image">
                        </span>
                        BÁO CÁO VI PHẠM
                    </button>
                </div>
                `;
                let className = 'info-place-bubble';
                // Create a bubble, if not created yet
                if (!bubble) {
                    bubble = new H.ui.InfoBubble({ lat, lng }, {
                        content: content,
                        className: className,
                    });
                    ui.addBubble(bubble);
                } else {
                    // Reuse existing bubble object
                    bubble.setPosition({ lat, lng });
                    bubble.setContent(content);
                    bubble.open();
                }
                bubbleElement = bubble.getElement();
                bubbleElement.classList.add(className);

                bubble.addEventListener('statechange', function (evt) {
                    if (evt.target.getState() === H.ui.InfoBubble.State.CLOSED) {
                        marker.setVisibility(false);
                    }
                })
            } else {
                alert('Không tìm thấy địa chỉ cho tọa độ này.');
            }
        })
        .catch(function (error) {
            console.error(error);
        });
});


// Create current location icon
var animatedSvg =
    `<svg class="svg-icon" style="width: 35px; height: 35px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M511.927479 574.368272m-449.631728 0a449.631728 449.631728 0 1 0 899.263456 0 449.631728 449.631728 0 1 0-899.263456 0Z" fill="#2B67ED" opacity=".34" /><path d="M347.884419 381.606799L511.927479 0l164.188102 381.606799" fill="#2B67ED" /><path d="M511.927479 574.368272m-261.22153 0a261.22153 261.22153 0 1 0 522.443059 0 261.22153 261.22153 0 1 0-522.443059 0Z" fill="#4381EF" /><path d="M511.927479 835.734844a261.076487 261.076487 0 1 1 261.076487-261.076487 261.076487 261.076487 0 0 1-261.076487 261.076487z m0-493.144476a232.067989 232.067989 0 1 0 232.067988 232.067989 232.067989 232.067989 0 0 0-232.067988-232.648159z" fill="#FFFFFF" /></svg>`
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;

            //Căn chỉnh bản đồ đến vị trí định vị
            // map.setCenter({ lat: latitude, lng: longitude });

            var currentLocationIcon = new H.map.DomIcon(animatedSvg),
                coords = { lat: latitude, lng: longitude },
                currentLocationMarker = new H.map.DomMarker(coords, { icon: currentLocationIcon });

            map.addObject(currentLocationMarker);
        },
        error => {
            console.error(error);
        }
    );
} else {
    console.error('Geolocation is not supported by this browser.');
}

$(document).ready(function () {
    // Simulated data for autocomplete
    const autocompleteData = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape', 'Lemon', 'Orange'];

    const autosuggestAPI = "RwHQ2j65M5LTexUJjALgQHcDkUJksCIc2K0Fyiyi2Ss"

    // Reference to the search input and autocomplete dropdown
    const searchInput = $('#searchInput');
    const autocompleteDropdown = $('#autocompleteDropdown');

    // Event listener for the input field
    searchInput.on('input', function () {
        const searchTerm = $(this).val().toLowerCase();

        const suggestionURL = `https://autosuggest.search.hereapi.com/v1/autosuggest?at=52.5199813,13.3985138&lang=vi&q=${searchTerm}&apiKey=${autosuggestAPI}`

        console.log(suggestionURL)

        searchPlaces = []

        // Clear previous results
        autocompleteDropdown.empty();

        fetch(suggestionURL).then(res => res.json()).then(res => {
            matchingResults = []
            searchPlaces = res.items
            // console.log(searchPlaces)
            res.items.forEach(item => {
                // console.log(item.title)
                matchingResults.push(item.title)
                autocompleteDropdown.append(`
                    <div class="dropdown-item">
                        <a class="fw-bold text-primary">${item.title}</a>
                        <p class="small text-muted">${item.address.label}</p>
                    </div>
                `);
                autocompleteDropdown.toggle(!!matchingResults.length);
            })
        })
        // Filter and display matching results
        // const matchingResults = autocompleteData.filter(item => item.toLowerCase().includes(searchTerm));
        // matchingResults.forEach(result => {
        //     autocompleteDropdown.append(`<a class="dropdown-item">${result}</a>`);
        // });

        // Show or hide the autocomplete dropdown based on results

    });

    // Event listener for losing focus on the search input
    searchInput.on('blur', function () {
        // Delay hiding the dropdown to allow the click on the dropdown item
        setTimeout(() => {
            autocompleteDropdown.hide();
        }, 200);
    });

    // Event listener for focusing on the search input
    searchInput.on('focus', function () {
        // Show the autocomplete dropdown when the input is focused
        autocompleteDropdown.show();
    });

    // Event listener for selecting an autocomplete option
    autocompleteDropdown.on('click', '.dropdown-item', function () {
        // Find the <a> element inside the clicked dropdown item
        const selectedLink = $(this).find('a.fw-bold.text-primary');

        // Get the text content of the <a> element
        const selectedText = selectedLink.text();

        let selectedItem;
        for (let i = 0; i < searchPlaces.length; i++)
            if (searchPlaces[i].title == selectedText) {
                selectedItem = searchPlaces[i]
                break
            }

        // Perform any action with the selected text
        alert(`Selected text: ${selectedItem.position.lat}-${selectedItem.position.lng}`);

        const latitude = selectedItem.position.lat
        const longitude = selectedItem.position.lng

        // Move map the the specific point
        map.setCenter({
            lat: latitude,
            lng: longitude
        });

        const iconUrl = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="30" height="30" viewBox="0 0 256 256" xml:space="preserve"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 45 90 c -1.415 0 -2.725 -0.748 -3.444 -1.966 l -4.385 -7.417 C 28.167 65.396 19.664 51.02 16.759 45.189 c -2.112 -4.331 -3.175 -8.955 -3.175 -13.773 C 13.584 14.093 27.677 0 45 0 c 17.323 0 31.416 14.093 31.416 31.416 c 0 4.815 -1.063 9.438 -3.157 13.741 c -0.025 0.052 -0.053 0.104 -0.08 0.155 c -2.961 5.909 -11.41 20.193 -20.353 35.309 l -4.382 7.413 C 47.725 89.252 46.415 90 45 90 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,61,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 45 45.678 c -8.474 0 -15.369 -6.894 -15.369 -15.368 S 36.526 14.941 45 14.941 c 8.474 0 15.368 6.895 15.368 15.369 S 53.474 45.678 45 45.678 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(156,37,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>';
        const icon = new H.map.Icon(iconUrl);
        const marker = new H.map.Marker({ lat: latitude, lng: longitude }, { icon: icon })
        map.addObject(marker)

        let bubble, bubbleElement, bubbleClose;
        const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude}%2C${longitude}&lang=vi-VN&apiKey=${apiKey}`;

        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.items && data.items.length > 0) {
                    let address = data.items[0].address;
                    let content = '<div style="width:250px;"><i class="fa-regular fa-circle-check" style="color: #00a832; margin-right:5px;"></i><b>Thông tin địa điểm</b> <br />' + address.label + '</div>';
                    let className = 'info-place-bubble';
                    // Create a bubble, if not created yet
                    if (!bubble) {
                        bubble = new H.ui.InfoBubble({ lat: latitude, lng: longitude }, {
                            content: content,
                            className: className,
                        });
                        ui.addBubble(bubble);
                    } else {
                        // Reuse existing bubble object
                        bubble.setPosition({ lat: latitude, lng: longitude });
                        bubble.setContent(content);
                        bubble.open();
                    }
                    bubbleElement = bubble.getElement();
                    bubbleElement.classList.add(className);

                    bubble.addEventListener('statechange', function (evt) {
                        if (evt.target.getState() === H.ui.InfoBubble.State.CLOSED) {
                            marker.setVisibility(false);
                        }
                    })
                } else {
                    alert('Không tìm thấy địa chỉ cho tọa độ này.');
                }
            })
            .catch(function (error) {
                console.error(error);
            });

        // Clear the dropdown
        autocompleteDropdown.empty();
    });
});