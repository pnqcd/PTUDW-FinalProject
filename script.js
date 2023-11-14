tinymce.init({
    selector: 'textarea#message',
    plugins: 'lists link image table code help wordcount'
});

var InfoBubble;
const rightPanel = document.getElementById('rightPanel');
const dataAdDetailsInnerHTML = document.getElementById('content-right-panel-detail-ad');

var reportAdBannerDialog = document.getElementById("reportAdBannerDialog");
var closeButtonAdBannerDialog = document.getElementsByClassName("closeAdBannerDialog")[0];

closeButtonAdBannerDialog.onclick = function() {reportAdBannerDialog.style.display = "none";}

function closeAdDetailRightSidePanel() {
    rightPanel.classList.remove('show');
}

function sendAdBannerReportButtonClicked() {
    event.preventDefault();

    // var name = document.getElementById('firstname').value;
    // var email = document.getElementById('email').value;
    // var phone = document.getElementById('phone').value;
    // var editor = tinymce.get("message").getContent();
    
    // /var formData = new FormData(document.getElementById('adBannerDialogReportForm'));
    tinymce.triggerSave(true,true);

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(new FormData(document.getElementById('adBannerDialogReportForm'))),
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
                onClick: function(){} // Callback after click
            }).showToast();
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
                onClick: function(){} // Callback after click
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
            onClick: function(){} // Callback after click
        }).showToast();
    });
}

function openLogin() {
    document.querySelector('#login-section').style.display = 'flex';
}
function closeLogin() {
    document.querySelector('#login-section').style.display = 'none';
}

function moveMapToKHTN(map){
    map.setCenter({lat:10.76316473604989, lng:106.68238541539267});
    map.setZoom(15);
}

function onReportAdBannerClicked() {
    reportAdBannerDialog.style.display = "block";
}

function detailAdButtonClicked(placeID) {
    rightPanel.classList.add('show');

    var pInformation = document.getElementById("popupInformation");
    var popupInformationInnerHTML = "";

    // var popup = document.getElementById("popup");
    // popup.style.display = "block";

    // var closePopupButton = document.getElementById("closePopup");
    // closePopupButton.addEventListener("click", function() {
    //     popup.style.display = "none";
    // });

    $(document).ready(function() {
        $.ajax({
            url: "/get-ad-details/" + placeID,
            method: "GET",
            success: function(response) {
                var placeDetails = response.placeDetails;
                console.log(placeDetails);

                for (var i = 0; i < placeDetails.length; i++) {
                    var jsDate = new Date(placeDetails[i].expire_date);
                    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
                    var formattedDate = jsDate.toLocaleDateString('vi-VN', options);

                    popupInformationInnerHTML += 
                        `<div class="place-detail-information">
                            <b>${placeDetails[i].ad_name}</b>
                            <p>${placeDetails[i].diachi} - ${placeDetails[i].khuvuc}</p>
                            <p>Kích thước: ${placeDetails[i].ad_size}</p>
                            <p>Số lượng: <b>${placeDetails[i].ad_quantity}</b></p>
                            <p>Hình thức: <b>${placeDetails[i].hinhthuc}</b></p>
                            <p>Phân loại: <b>${placeDetails[i].loaivt}</b></p>
                            <div class="placeDetailsButtonContainer">
                                <a class="placeDetailsButton" href="${placeDetails[i].img_path}" data-lightbox="detail-pano-${placeDetails[i].stt}" data-title="Ngày hết hạn: ${formattedDate}">
                                    <img src="./assets/img/icon_info.png" width="25px" height="25px">
                                </a>
                            
                                <div style="border: 2px solid #dc4f52; border-radius: 3px;">
                                <button class="placeDetailsButton textWithImageButton" onclick="onReportAdBannerClicked()">
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
                dataAdDetailsInnerHTML.innerHTML = '<span class="close-button" id="closeButton" onclick="closeAdDetailRightSidePanel()">&times;</span><h2>Thông tin chi tiết</h2>' + popupInformationInnerHTML;
                console.log(dataAdDetailsInnerHTML.innerHTML);
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

    var marker = new H.map.Marker(coordinate,{icon: icon});
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

    $(document).ready(function() {
        $.ajax({
            url: "/get-place",
            method: "GET",
            success: function(response) {
                var place = response.place;
                for (var i = 0; i < place.length; i++) {
                    addMarkerToGroup(group, {lat: place[i].latitude, lng: place[i].longitude},
                        `<div class="place-info">
                            <b>${place[i].hinhthuc}</b>
                            <p>${place[i].loaivt}</p>
                            <p>${place[i].diachi}, ${place[i].khuvuc}</p>
                            <b><i>${place[i].quyhoach}</i></b>
                            <img class="img-place" src="${place[i].hinhanh}">
                            <button class='detailedAdSign' onclick="detailAdButtonClicked('${place[i].stt}')">Chi tiết</button>
                        </div>`, place[i].quyhoach
                    );
                }
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
    defaultLayers.vector.normal.map,{
    center: {lat:10.76316473604989, lng:106.68238541539267},
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


let bubble, marker, bubbleElement, bubbleClose;
map.addEventListener('tap', function (evt) {
    if (bubble) {
        marker.setVisibility(false);
    }
    let {lat,lng} = map.screenToGeo (
        evt.currentPointer.viewportX,
        evt.currentPointer.viewportY,
    );
    const iconUrl = `<svg width="22" height="38" viewBox="0 0 22 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 0.336562C5.08359 0.336562 0.287342 5.13281 0.287342 11.0492C0.291639 12.8656 0.75781 14.6513 1.19203 15.4447L11 37.6634L20.3736 16.2381H20.3687C21.2491 14.6503 21.7115 12.8648 21.7126 11.0492C21.7127 5.13281 16.9164 0.336562 11 0.336562ZM11 5.69281C11.7034 5.69281 12.3999 5.83136 13.0498 6.10055C13.6996 6.36973 14.2901 6.76429 14.7875 7.26168C15.2849 7.75907 15.6794 8.34955 15.9486 8.99942C16.2177 9.64929 16.3563 10.3458 16.3562 11.0492C16.3562 12.4698 15.7919 13.8322 14.7874 14.8367C13.7829 15.8412 12.4206 16.4055 11 16.4055C9.57943 16.4055 8.21705 15.8412 7.21256 14.8367C6.20807 13.8322 5.64375 12.4698 5.64375 11.0492C5.64375 9.62865 6.20807 8.26627 7.21256 7.26178C8.21705 6.25729 9.57943 5.69297 11 5.69297V5.69281Z" fill="#FF0000"/>
    </svg>`;
    const icon = new H.map.Icon(iconUrl);
    marker = new H.map.Marker({lat, lng}, {icon: icon});
    map.addObject(marker);
    const url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lng}&lang=vi-VN&apiKey=${apiKey}`;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            if (data.items && data.items.length > 0) {
                var address = data.items[0].address;
                let content = '<div style="width:250px;"><i class="fa-regular fa-circle-check" style="color: #00a832; margin-right:5px;"></i><b>Thông tin địa điểm</b> <br />' + address.label + '</div>';
                let className = 'info-place-bubble';
                // Create a bubble, if not created yet
                if (!bubble) {
                    bubble = new H.ui.InfoBubble({lat, lng}, {
                        content: content,
                        className: className,
                    });
                    ui.addBubble(bubble);
                } else {
                    // Reuse existing bubble object
                    bubble.setPosition({lat, lng});
                    bubble.setContent(content);
                    bubble.open();
                }
                bubbleElement = bubble.getElement();
                bubbleElement.classList.add(className);

                bubble.addEventListener('statechange', function(evt) {
                    if (evt.target.getState() === H.ui.InfoBubble.State.CLOSED) {
                        marker.setVisibility(false);
                    }
                })
            } else {
                alert('Không tìm thấy địa chỉ cho tọa độ này.');
            }
        })
        .catch(function(error) {
            console.error(error);
        });
});
