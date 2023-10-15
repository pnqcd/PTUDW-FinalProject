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
  (13, '59 Nguyễn Trãi', 'Phường 2, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Cổ động chính trị', '/assets/img/stt13.png', 'CHƯA QUY HOẠCH', 10.758625, 106.681833);



