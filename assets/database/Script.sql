CREATE DATABASE mydatabase;

CREATE TABLE PLACE (
	STT	SERIAL primary KEY,
	DiaChi	TEXT,
	KhuVuc	TEXT,
	LoaiVT	TEXT,
	HinhThuc TEXT,
	HinhAnh	TEXT,
	QuyHoach TEXT,
	Latitude FLOAT8,
	Longitude FLOAT8
);

INSERT INTO PLACE 
VALUES
  (1, '99 Nguyễn Văn Cừ', 'Phường 3, Quận 5', 'Cây xăng', 'Cổ động chính trị', '/assets/img/stt1.png', 'ĐÃ QUY HOẠCH', 10.759589, 106.683782),
  (2, 'Nowzone Fashion Mall', 'Phường Nguyễn Cư Trinh, Quận 1', 'Trung tâm thương mại', 'Quảng cáo thương mại', '/assets/img/stt2.png', 'ĐÃ QUY HOẠCH', 10.764171, 106.682503),
  (3, 'Ngã Sáu Cộng Hoà', 'Phường 4, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Xã hội hoá', '/assets/img/stt3.png', 'CHƯA QUY HOẠCH', 10.765288, 106.681415),
  (4, 'Công viên Văn Lang', 'Phường 9, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Xã hội hoá', '/assets/img/stt4.png', 'ĐÃ QUY HOẠCH', 10.756415, 106.667885),
  (5, 'Chợ An Đông', 'Phường 9, Quận 5', 'Chợ', 'Quảng cáo thương mại', '/assets/img/stt5.png', 'CHƯA QUY HOẠCH', 10.757931, 106.672182),
  (6, '225 Nguyễn Tri Phương', 'Phường 9, Quận 5', 'Nhà chờ xe buýt', 'Quảng cáo thương mại', '/assets/img/stt6.png', 'CHƯA QUY HOẠCH', 10.758374, 106.669158),
  (7, 'Vincom Center', 'Phường Bến Nghé, Quận 1', 'Trung tâm thương mại', 'Cổ động chính trị', '/assets/img/stt7.png', 'ĐÃ QUY HOẠCH', 10.778158, 106.701837),
  (8, 'Công viên Âu Lạc', 'Phường 4, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt8.png', 'ĐÃ QUY HOẠCH', 10.765299, 106.681290),
  (9, 'Chợ Kim Biên', 'Phường 13, Quận 5', 'Chợ', 'Cổ động chính trị', '/assets/img/stt9.png', 'ĐÃ QUY HOẠCH', 10.749357, 106.655997),
  (10, '11A Trần Phú', 'Phường 4, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Xã hội hoá', '/assets/img/stt10.png', 'CHƯA QUY HOẠCH', 10.763748, 106.680162),
  (11, '749 Trần Hưng Đạo', 'Phường 1, Quận 5', 'Cây xăng', 'Xã hội hoá', '/assets/img/stt11.png', 'ĐÃ QUY HOẠCH', 10.755485, 106.682182),
  (12, 'Công viên 23 Tháng 9', 'Phường Phạm Ngũ Lão, Quận 1', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt12.png', 'ĐÃ QUY HOẠCH', 10.769673, 106.694745),
  (13, '59 Nguyễn Trãi', 'Phường 2, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Cổ động chính trị', '/assets/img/stt13.png', 'CHƯA QUY HOẠCH', 10.758625, 106.681833),
  (14, 'Thảo Cầm Viên Sài Gòn','Phường Bến Nghé, Quận 1', 'Đất công/Công viên/Hành lang an toàn giao thông','Xã hội hoá','/assets/img/stt14.png', 'ĐÃ QUY HOẠCH',10.787826023345037, 106.70541150668753),
  (15,'Chợ Bến Thành','Phường Bến Thành, Quận 1','Chợ', 'Cổ động chính trị', '/assets/img/stt15.png', 'ĐÃ QUY HOẠCH',10.773103239666066, 106.69778743886339),
  (16,'Nhà thờ Đức Bà Sài Gòn','Phường Bến Nghé, Quận 1','Đất công/Công viên/Hành lang an toàn giao thông', 'Xã hội hoá', '/assets/img/stt16.png', 'CHƯA QUY HOẠCH',10.780923219186516, 106.6992758765486),
  (17,'Tượng Đài An Dương Vương','Phường 9, Quận 5','Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt17.png', 'ĐÃ QUY HOẠCH',10.759860669322808, 106.668870861361),
  (18,'215 Hồng Bàng', 'Phường 11, Quận 5','Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt18.png', 'CHƯA QUY HOẠCH',10.755269581037851, 106.6644807214412),
  (19,'128 Trần Phú', 'Phường 4, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt19.png', 'ĐÃ QUY HOẠCH',10.761546444547767, 106.67770576582872),
  (20,'117 Nguyễn Tri Phương', 'Phường 7, Quận 5','Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt20.png', 'ĐÃ QUY HOẠCH',10.75422725220117, 106.66937537360512 ),
  (21,'75B Trần Hưng Đạo B', 'Phường 6, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt21.png', 'ĐÃ QUY HOẠCH',10.752697312603573, 106.66962949860977),
  (22,'110 Trần Hưng Đạo', 'Phường 7, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt22.png', 'ĐÃ QUY HOẠCH',10.752956601570611, 106.66969794624308),
  (23,'342-344 Hai Bà Trưng', 'Phường Tân Định, Quận 1','Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt23.png', 'ĐÃ QUY HOẠCH',10.790269478614027, 106.68923660490096),
  (24,'Công viên Lê Văn Tám','Phường Đa Kao, Quận 1','Đất công/Công viên/Hành lang an toàn giao thông','Xã hội hoá','/assets/img/stt24.png', 'ĐÃ QUY HOẠCH',10.788267943867027, 106.69379577301899),
  (25,'7 Nguyễn Thị Minh Khai', 'Phường Bến Nghé, Quận 1','Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt25.png', 'ĐÃ QUY HOẠCH',10.788335426786606, 106.70337229178546),
  (26,'66 Mạc Cửu/67 Vạn Kiếp', 'Phường 13, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Quảng cáo thương mại', '/assets/img/stt26.png', 'ĐÃ QUY HOẠCH',10.750453973043228, 106.65939129886226),
  (40, '37 Bạch Vân', 'Phường 5, Quận 5', 'Chợ', 'Quảng cáo thương mại', '/assets/img/stt40.png', 'ĐÃ QUY HOẠCH', 10.753344016428072, 106.67566715772404),
  (41, '214 Đ. Phùng Hưng', 'Phường 14, Quận 5', 'Chợ', 'Xã hội hoá', '/assets/img/stt41.png', 'CHƯA HUY HOẠCH', 10.753821865690917, 106.65757988317888),
  (42, 'QM42+JQ2, Đ. Hà Tôn Quyền', 'Phường 15, Quận 5', 'Chợ', 'Quảng cáo thương mại', '/assets/img/stt42.png', 'ĐÃ HUY HOẠCH', 10.757279102175037, 106.65204380375708),
  (43, '1 Đ. Phú Giáo', 'Phường 14, Quận 5', 'Chợ', 'Xã hội hoá', '/assets/img/stt43.png', 'CHƯA HUY HOẠCH', 10.752346203906628, 106.65234421114377),
  (44, 'Công viên 23/9', 'Phường Phạm Ngũ Lão, Quận 1', 'Công viên', 'Quảng cáo thương mại', '/assets/img/stt44.png', 'ĐÃ HUY HOẠCH', 10.771863620867485, 106.69186829100512),
  (45, 'Công viên Tao Đàn', 'Phường Bến Thành, Quận 1', 'Công viên', 'Xã hội hoá', '/assets/img/stt45.png', 'CHƯA HUY HOẠCH', 10.776966269277086, 106.69148738412568),
  (46, 'Công viên Bến Bạch Đằng', 'Phường Bến Nghé, Quận 1', 'Công viên', 'Cổ động chính trị', '/assets/img/stt46.png', 'ĐÃ HUY HOẠCH', 10.775617196683136, 106.70745189222578),
  (47, 'Hùng Vương Plaza', 'Phường 12, Quận 5', 'Trung tâm thương mại', 'Quảng cáo thương mại', '/assets/img/stt47.png', 'CHƯA HUY HOẠCH', 10.756925580407563, 106.66329813444582),
  (48, 'Trung tâm thương mại Chợ Lớn', 'Phường 11, Quận 5', 'Trung tâm thương mại', 'Xã hội hoá', '/assets/img/stt48.png', 'ĐÃ HUY HOẠCH', 10.7537740121254, 106.66514885863228),
  (49, 'Thuận Kiều Plaza', 'Phường 12, Quận 5', 'Trung tâm thương mại', 'Quảng cáo thương mại', '/assets/img/stt49.png', 'CHƯA HUY HOẠCH', 10.754859707659163, 106.65698360675886),
  (50, 'Golden Plaza', 'Phường 14, Quận 5', 'Trung tâm thương mại', 'Cổ động chính trị', '/assets/img/stt50.png', 'ĐÃ HUY HOẠCH', 10.753120540065478, 106.65477346652453),
  (51, 'Bến xe Bến Thành', 'Phường Nguyễn Thái Bình, Quận 1', 'Nhà chờ xe buýt', '/assets/img/stt51.png', 'CHƯA HUY HOẠCH', 10.77239291160367, 106.6981830620045),
  (52, 'Điểm trung chuyển Hàm Nghi', 'Phường Bến Nghé, Quận 1', 'Nhà chờ xe buýt', '/assets/img/stt52.png', 'ĐÃ HUY HOẠCH', 10.773151773808188, 106.70298958057228)



