tinymce.init({
    selector: 'textarea#message',
    plugins: 'lists link image table code help wordcount'
});

var airports = [
    {
        "stt": 1,
        "diachi": "99 Nguyễn Văn Cừ",
        "khuvuc": "Phường 3, Quận 5",
        "loaivt": "Cây xăng",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt1.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.759589,
        "longitude": 106.683782
    },
    {
        "stt": 2,
        "diachi": "Nowzone Fashion Mall",
        "khuvuc": "Phường Nguyễn Cư Trinh, Quận 1",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt2.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.764171,
        "longitude": 106.682503
    },
    {
        "stt": 3,
        "diachi": "Ngã Sáu Cộng Hoà",
        "khuvuc": "Phường 4, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt3.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.765288,
        "longitude": 106.681415
    },
    {
        "stt": 4,
        "diachi": "Công viên Văn Lang",
        "khuvuc": "Phường 9, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt4.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.756415,
        "longitude": 106.667885
    },
    {
        "stt": 5,
        "diachi": "Chợ An Đông",
        "khuvuc": "Phường 9, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt5.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.757931,
        "longitude": 106.672182
    },
    {
        "stt": 6,
        "diachi": "225 Nguyễn Tri Phương",
        "khuvuc": "Phường 9, Quận 5",
        "loaivt": "Nhà chờ xe buýt",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt6.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.758374,
        "longitude": 106.669158
    },
    {
        "stt": 7,
        "diachi": "Vincom Center",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt7.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.778158,
        "longitude": 106.701837
    },
    {
        "stt": 8,
        "diachi": "Công viên Âu Lạc",
        "khuvuc": "Phường 4, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt8.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.765299,
        "longitude": 106.68129
    },
    {
        "stt": 9,
        "diachi": "Chợ Kim Biên",
        "khuvuc": "Phường 13, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt9.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.749357,
        "longitude": 106.655997
    },
    {
        "stt": 10,
        "diachi": "11A Trần Phú",
        "khuvuc": "Phường 4, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt10.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.763748,
        "longitude": 106.680162
    },
    {
        "stt": 11,
        "diachi": "749 Trần Hưng Đạo",
        "khuvuc": "Phường 1, Quận 5",
        "loaivt": "Cây xăng",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt11.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.755485,
        "longitude": 106.682182
    },
    {
        "stt": 12,
        "diachi": "Công viên 23 Tháng 9",
        "khuvuc": "Phường Phạm Ngũ Lão, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt12.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.769673,
        "longitude": 106.694745
    },
    {
        "stt": 13,
        "diachi": "59 Nguyễn Trãi",
        "khuvuc": "Phường 2, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt13.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.758625,
        "longitude": 106.681833
    },
    {
        "stt": 14,
        "diachi": "Thảo Cầm Viên Sài Gòn",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt14.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.787826023345037,
        "longitude": 106.70541150668753
    },
    {
        "stt": 15,
        "diachi": "Chợ Bến Thành",
        "khuvuc": "Phường Bến Thành, Quận 1",
        "loaivt": "Chợ",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt15.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.773103239666066,
        "longitude": 106.69778743886339
    },
    {
        "stt": 16,
        "diachi": "Nhà thờ Đức Bà Sài Gòn",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt16.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.780923219186516,
        "longitude": 106.6992758765486
    },
    {
        "stt": 17,
        "diachi": "Tượng Đài An Dương Vương",
        "khuvuc": "Phường 9, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt17.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.759860669322808,
        "longitude": 106.668870861361
    },
    {
        "stt": 18,
        "diachi": "215 Hồng Bàng",
        "khuvuc": "Phường 11, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt18.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.755269581037851,
        "longitude": 106.6644807214412
    },
    {
        "stt": 19,
        "diachi": "128 Trần Phú",
        "khuvuc": "Phường 4, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt19.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.761546444547767,
        "longitude": 106.67770576582872
    },
    {
        "stt": 20,
        "diachi": "117 Nguyễn Tri Phương",
        "khuvuc": "Phường 7, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt20.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.75422725220117,
        "longitude": 106.66937537360512
    },
    {
        "stt": 21,
        "diachi": "75B Trần Hưng Đạo B",
        "khuvuc": "Phường 6, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt21.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.752697312603573,
        "longitude": 106.66962949860977
    },
    {
        "stt": 22,
        "diachi": "110 Trần Hưng Đạo",
        "khuvuc": "Phường 7, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt22.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.752956601570611,
        "longitude": 106.66969794624308
    },
    {
        "stt": 23,
        "diachi": "342-344 Hai Bà Trưng",
        "khuvuc": "Phường Tân Định, Quận 1",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt23.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.790269478614027,
        "longitude": 106.68923660490096
    },
    {
        "stt": 24,
        "diachi": "Công viên Lê Văn Tám",
        "khuvuc": "Phường Đa Kao, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt24.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.788267943867027,
        "longitude": 106.69379577301899
    },
    {
        "stt": 25,
        "diachi": "7 Nguyễn Thị Minh Khai",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt25.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.788335426786606,
        "longitude": 106.70337229178546
    },
    {
        "stt": 26,
        "diachi": "66 Mạc Cửu/67 Vạn Kiếp",
        "khuvuc": "Phường 13, Quận 5",
        "loaivt": "Đất tư nhân/Nhà ở riêng lẻ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt26.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.750453973043228,
        "longitude": 106.65939129886226
    },
    {
        "stt": 27,
        "diachi": "Chợ Bàu Sen",
        "khuvuc": "Phường 3, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt27.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.759095514804697,
        "longitude": 106.67826751147525
    },
    {
        "stt": 28,
        "diachi": "Chợ Bến Thành",
        "khuvuc": "Phường Bến Thành, Quận 1",
        "loaivt": "Chợ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt28.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.772759203799483,
        "longitude": 106.69804225380446
    },
    {
        "stt": 29,
        "diachi": "Cửa hàng xăng dầu số 18 Satra",
        "khuvuc": "Phường Cầu Ông Lãnh, Quận 1",
        "loaivt": "Cây xăng",
        "hinhthuc": "Xã hội hóa",
        "hinhanh": "/assets/img/stt29.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.770418779835309,
        "longitude": 106.69664035365172
    },
    {
        "stt": 30,
        "diachi": "Thảo Cầm Viên Sài Gòn",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt30.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.787785764251094,
        "longitude": 106.70522620156756
    },
    {
        "stt": 31,
        "diachi": "Takashimaya",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt31.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.773161652949833,
        "longitude": 106.7006106995531
    },
    {
        "stt": 32,
        "diachi": "Trạm trung chuyển xe buýt Sài Gòn",
        "khuvuc": "Phường Nguyễn Thái Bình, Quận 1",
        "loaivt": "Nhà chờ xe buýt",
        "hinhthuc": "Xã hội hóa",
        "hinhanh": "/assets/img/stt32.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.77116358839105,
        "longitude": 106.70009143002324
    },
    {
        "stt": 33,
        "diachi": "Công viên Võ Văn Kiệt",
        "khuvuc": "Phường 6, Quận 5",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt33.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.750649340531725,
        "longitude": 106.67086646729815
    },
    {
        "stt": 34,
        "diachi": "Hùng Vương Plaza",
        "khuvuc": "Phường 10, Quận 5",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Xã hội hóa",
        "hinhanh": "/assets/img/stt34.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.757089204710532,
        "longitude": 106.66315243519587
    },
    {
        "stt": 35,
        "diachi": "Trạm xăng dầu COMECO số 04",
        "khuvuc": "Phường 14, Quận 5",
        "loaivt": "Cây xăng",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt35.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.752040200465062,
        "longitude": 106.65064363190817
    },
    {
        "stt": 36,
        "diachi": "Chợ Cao Đạt",
        "khuvuc": "Phường 1, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt36.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.754991180485225,
        "longitude": 106.68304471218546
    },
    {
        "stt": 37,
        "diachi": "Bến Xe Buýt Chợ Lớn",
        "khuvuc": "Phường 14, Quận 5",
        "loaivt": "Nhà chờ xe buýt",
        "hinhthuc": "Xã hội hóa",
        "hinhanh": "/assets/img/stt37.png",
        "quyhoach": "CHƯA QUY HOẠCH",
        "latitude": 10.751955197976605,
        "longitude": 106.65145901802512
    },
    {
        "stt": 38,
        "diachi": "Diamond Plaza",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt38.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.781507555373265,
        "longitude": 106.69817839837417
    },
    {
        "stt": 39,
        "diachi": "Dinh Độc Lập",
        "khuvuc": "Phường Bến Thành, Quận 1",
        "loaivt": "Đất công/Công viên/Hành lang an toàn giao thông",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt39.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.777044738999189,
        "longitude": 106.6952339715524
    },
    {
        "stt": 40,
        "diachi": "37 Bạch Vân",
        "khuvuc": "Phường 5, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt40.png",
        "quyhoach": "ĐÃ QUY HOẠCH",
        "latitude": 10.753344016428072,
        "longitude": 106.67566715772404
    },
    {
        "stt": 41,
        "diachi": "214 Đ. Phùng Hưng",
        "khuvuc": "Phường 14, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt41.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.753821865690917,
        "longitude": 106.65757988317888
    },
    {
        "stt": 42,
        "diachi": "QM42+JQ2, Đ. Hà Tôn Quyền",
        "khuvuc": "Phường 15, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt42.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.757279102175037,
        "longitude": 106.65204380375708
    },
    {
        "stt": 43,
        "diachi": "1 Đ. Phú Giáo",
        "khuvuc": "Phường 14, Quận 5",
        "loaivt": "Chợ",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt43.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.752346203906628,
        "longitude": 106.65234421114377
    },
    {
        "stt": 44,
        "diachi": "Công viên 23/9",
        "khuvuc": "Phường Phạm Ngũ Lão, Quận 1",
        "loaivt": "Công viên",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt44.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.771863620867485,
        "longitude": 106.69186829100512
    },
    {
        "stt": 45,
        "diachi": "Công viên Tao Đàn",
        "khuvuc": "Phường Bến Thành, Quận 1",
        "loaivt": "Công viên",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt45.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.776966269277086,
        "longitude": 106.69148738412568
    },
    {
        "stt": 46,
        "diachi": "Công viên Bến Bạch Đằng",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Công viên",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt46.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.775617196683136,
        "longitude": 106.70745189222578
    },
    {
        "stt": 47,
        "diachi": "Hùng Vương Plaza",
        "khuvuc": "Phường 12, Quận 5",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt47.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.756925580407563,
        "longitude": 106.66329813444582
    },
    {
        "stt": 48,
        "diachi": "Trung tâm thương mại Chợ Lớn",
        "khuvuc": "Phường 11, Quận 5",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt48.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.7537740121254,
        "longitude": 106.66514885863228
    },
    {
        "stt": 49,
        "diachi": "Thuận Kiều Plaza",
        "khuvuc": "Phường 12, Quận 5",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Quảng cáo thương mại",
        "hinhanh": "/assets/img/stt49.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.754859707659163,
        "longitude": 106.65698360675886
    },
    {
        "stt": 50,
        "diachi": "Golden Plaza",
        "khuvuc": "Phường 14, Quận 5",
        "loaivt": "Trung tâm thương mại",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt50.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.753120540065478,
        "longitude": 106.65477346652453
    },
    {
        "stt": 51,
        "diachi": "Bến xe Bến Thành",
        "khuvuc": "Phường Nguyễn Thái Bình, Quận 1",
        "loaivt": "Nhà chờ xe buýt",
        "hinhthuc": "Xã hội hoá",
        "hinhanh": "/assets/img/stt51.png",
        "quyhoach": "CHƯA HUY HOẠCH",
        "latitude": 10.77239291160367,
        "longitude": 106.6981830620045
    },
    {
        "stt": 52,
        "diachi": "Điểm trung chuyển Hàm Nghi",
        "khuvuc": "Phường Bến Nghé, Quận 1",
        "loaivt": "Nhà chờ xe buýt",
        "hinhthuc": "Cổ động chính trị",
        "hinhanh": "/assets/img/stt52.png",
        "quyhoach": "ĐÃ HUY HOẠCH",
        "latitude": 10.773151773808188,
        "longitude": 106.70298958057228
    }
];

var InfoBubble;
const rightPanel = document.getElementById('rightPanel');
const dataAdDetailsInnerHTML = document.getElementById('content-right-panel-detail-ad');

var reportAdBannerDialog = document.getElementById("reportAdBannerDialog");
var closeButtonAdBannerDialog = document.getElementsByClassName("closeAdBannerDialog")[0];

closeButtonAdBannerDialog.onclick = function () { reportAdBannerDialog.style.display = "none"; }

function startClustering(map, data) {
    var dataPoints = data.map(function (item) {
        return new H.clustering.DataPoint(item.latitude, item.longitude)
    })

    var clusteredDataProvider = new H.clustering.Provider(dataPoints, {
        clusteringOptions: {
            eps: 64,
            minWeight: 2
        },
    })

    var clusteringLayer = new H.map.layer.ObjectLayer(clusteredDataProvider)
    map.addLayer(clusteringLayer)
}

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
    tinymce.triggerSave(true, true);

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
                    onClick: function () { } // Callback after click
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

    $(document).ready(function () {
        $.ajax({
            url: "/get-ad-details/" + placeID,
            method: "GET",
            success: function (response) {
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
                for (var i = 0; i < place.length; i++) {
                    addMarkerToGroup(group, { lat: place[i].latitude, lng: place[i].longitude },
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

startClustering(map, airports)

let bubble, marker, bubbleElement, bubbleClose;
map.addEventListener('tap', function (evt) {
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
                let content = '<div style="width:250px;"><i class="fa-regular fa-circle-check" style="color: #00a832; margin-right:5px;"></i><b>Thông tin địa điểm</b> <br />' + address.label + '</div>';
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
