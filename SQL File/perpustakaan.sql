-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 18, 2021 at 10:59 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `anggota_perpus`
--

CREATE TABLE `anggota_perpus` (
  `NIS` varchar(30) NOT NULL,
  `Nama` varchar(30) DEFAULT NULL,
  `Tmpt_Tinggal` char(60) DEFAULT NULL,
  `tgl_lahir` char(30) DEFAULT NULL,
  `no_HP` char(30) DEFAULT NULL,
  `email` char(30) DEFAULT NULL,
  `jurusan` char(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `anggota_perpus`
--

INSERT INTO `anggota_perpus` (`NIS`, `Nama`, `Tmpt_Tinggal`, `tgl_lahir`, `no_HP`, `email`, `jurusan`) VALUES
('1119101822', 'Bambang', 'Banyuwangi', '2001-12-12', '08888888888', 'ahidayah729@gmail.com', 'Multimedia'),
('126391827398', 'Udin', 'Banyuwangi', '2001-12-12', '0888202020', 'ahidayah729@gmail.com', 'Akuntansi'),
('2222', 'Budi', 'aasdasd', '23123-12-31', '1231241', 'ahidayah729@gmail.com', 'Teknik Komputer'),
('546456', 'Jongli', 'Liyue', '1111-12-31', '345345', 'ertertert', 'Akuntansi');

-- --------------------------------------------------------

--
-- Table structure for table `login_user`
--

CREATE TABLE `login_user` (
  `user_id` varchar(30) NOT NULL,
  `username` char(30) NOT NULL,
  `nama_lengkap` char(30) DEFAULT NULL,
  `email` char(30) DEFAULT NULL,
  `no_HP` char(30) DEFAULT NULL,
  `level_user` char(30) DEFAULT NULL,
  `pass_id` char(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `login_user`
--

INSERT INTO `login_user` (`user_id`, `username`, `nama_lengkap`, `email`, `no_HP`, `level_user`, `pass_id`) VALUES
('ADM-001', 'ahidayah729', 'Al Hidayah', 'ahidayah729@gmail.com', '0888888', 'Admin', 'ahidayah729');

-- --------------------------------------------------------

--
-- Table structure for table `stok_buku`
--

CREATE TABLE `stok_buku` (
  `id_buku` varchar(50) NOT NULL,
  `judul_buku` char(50) NOT NULL,
  `pengarang` char(50) DEFAULT NULL,
  `penerbit` char(50) DEFAULT NULL,
  `tahun_terbit` char(50) DEFAULT NULL,
  `stok` int(30) DEFAULT NULL,
  `genre` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stok_buku`
--

INSERT INTO `stok_buku` (`id_buku`, `judul_buku`, `pengarang`, `penerbit`, `tahun_terbit`, `stok`, `genre`) VALUES
('123', '123', '123', '123', '123', 0, NULL),
('1234', 'dasf', 'asdasd', 'asdasd', 'asd', 111, NULL),
('BKK-123', 'lalala', 'lilili', 'lululu', '2019', 88, NULL),
('DDD-115', 'asdasd', 'asdasd', 'asdasd', 'asdasd', 0, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anggota_perpus`
--
ALTER TABLE `anggota_perpus`
  ADD PRIMARY KEY (`NIS`);

--
-- Indexes for table `login_user`
--
ALTER TABLE `login_user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `stok_buku`
--
ALTER TABLE `stok_buku`
  ADD PRIMARY KEY (`id_buku`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
