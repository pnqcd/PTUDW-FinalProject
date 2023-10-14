CREATE DATABASE mydatabase;

CREATE TABLE PLACE (
	STT	SERIAL primary KEY,
	DiaChi	TEXT,
	KhuVuc	TEXT,
	LoaiVT	TEXT,
	HinhThuc TEXT,
	HinhAnh	TEXT,
	QuyHoach INT
);

INSERT INTO PLACE 
VALUES
  (1, '99 Nguyễn Văn Cừ', 'Phường 3, Quận 5', 'Cây xăng', 'Cổ động chính trị', '/assets/img/stt1', 1),
  (2, 'Nowzone Fashion Mall', 'Phường Nguyễn Cư Trinh, Quận 1', 'Trung tâm thương mại', 'Quảng cáo thương mại', '/assets/img/stt2', 1),
  (3, 'Ngã Sáu Cộng Hoà', 'Phường 4, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Xã hội hoá', '/assets/img/stt3', 0),
  (4, 'Công viên Văn Lang', 'Phường 9, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Xã hội hoá', '/assets/img/stt4', 1),
  (5, 'Chợ An Đông', 'Phường 9, Quận 5', 'Chợ', 'Quảng cáo thương mại', '/assets/img/stt5', 0),
  (6, '225 Nguyễn Tri Phương', 'Phường 9, Quận 5', 'Nhà chờ xe buýt', 'Quảng cáo thương mại', '/assets/img/stt6', 0),
  (7, 'Vincom Center', 'Phường Bến Nghé, Quận 1', 'Trung tâm thương mại', 'Cổ động chính trị', '/assets/img/stt7', 1),
  (8, 'Công viên Âu Lạc', 'Phường 4, Quận 5', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt8', 1),
  (9, 'Chợ Kim Biên', 'Phường 13, Quận 5', 'Chợ', 'Cổ động chính trị', '/assets/img/stt9', 1),
  (10, '11A Trần Phú', 'Phường 4, Quận 5', 'Đất tư nhân/Nhà ở riêng lẻ', 'Xã hội hoá', '/assets/img/stt10', 0),
  (11, '749 Trần Hưng Đạo', 'Phường 1, Quận 5', 'Cây xăng', 'Xã hội hoá', '/assets/img/stt11', 1),
  (12, 'Công viên 23 Tháng 9', 'Phường Phạm Ngũ Lão, Quận 1', 'Đất công/Công viên/Hành lang an toàn giao thông', 'Quảng cáo thương mại', '/assets/img/stt12', 1),
  (13, '59 Nguyễn Trãi', 'Phường 2, Quận 5', 'Đất tư nhân/Nhà ở riênglẻ', 'Cổ động chính trị', '/assets/img/stt13', 0);



