-- --------------------------------------------------------
-- Hôte:                         127.0.0.1
-- Version du serveur:           8.0.30 - MySQL Community Server - GPL
-- SE du serveur:                Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Listage des données de la table monappli.amities : ~2 rows (environ)
INSERT INTO `amities` (`id`, `user_id`, `friend_id`, `created_at`, `updated_at`) VALUES
	(1, 1, 2, NULL, NULL),
	(2, 2, 1, NULL, NULL);

-- Listage des données de la table monappli.failed_jobs : ~0 rows (environ)

-- Listage des données de la table monappli.migrations : ~18 rows (environ)
INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
	(1, '2014_10_12_000000_create_users_table', 1),
	(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
	(3, '2019_08_19_000000_create_failed_jobs_table', 1),
	(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
	(5, '2023_10_03_155344_users', 1),
	(6, '2023_10_03_155742_users', 2),
	(7, '2023_10_03_155838_users', 2),
	(9, '2023_10_03_160246_create_amitiés_table', 3),
	(10, '2023_10_04_100140_create_post_table', 4),
	(11, '2023_10_04_133503_create_amities_table', 5),
	(13, '2023_10_18_092547_nullable_password_in_users_table', 6),
	(16, '2023_10_19_062316_create_quiz_logos', 7),
	(17, '2023_10_19_072851_create_quiz_joueurs', 7),
	(18, '2023_10_19_093046_add_user_to_post', 8),
	(19, '2023_10_19_100157_add_user_image_to_users', 9),
	(20, '2023_12_18_153241_add_bio_and_team_to_users', 10),
	(21, '0000_00_00_000000_create_websockets_statistics_entries_table', 11),
	(22, '2024_01_12_014626_add_socials_to_users', 12);

-- Listage des données de la table monappli.password_reset_tokens : ~0 rows (environ)

-- Listage des données de la table monappli.personal_access_tokens : ~118 rows (environ)
INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
	(1, 'App\\Models\\User', 3, 'test', '55bb36dacfbfafa24f734aad6cfcd976a5bccb2174d1c324666658c6c265c9a2', '["*"]', NULL, NULL, '2023-10-18 13:38:28', '2023-10-18 13:38:28'),
	(2, 'App\\Models\\User', 3, 'test', '83c4cb9aad92a8a72be0db69bbbbc864bfb8acaee83e4fa9fdf620c16f66be26', '["*"]', NULL, NULL, '2023-10-18 13:38:49', '2023-10-18 13:38:49'),
	(3, 'App\\Models\\User', 3, 'test', '245382c2e2bbb0c1adfab8baab3271609acc5eb3823822ee035d2fb9b4519b28', '["*"]', NULL, NULL, '2023-10-18 13:39:02', '2023-10-18 13:39:02'),
	(4, 'App\\Models\\User', 3, 'test', '9946c2ec0a8301e51d1a9c0af7d17f93e38319fb51a953c5b4de6812db6924a8', '["*"]', NULL, NULL, '2023-10-18 13:39:24', '2023-10-18 13:39:24'),
	(5, 'App\\Models\\User', 5, 'test', '170b75ca60e0f4d0ff7176d42ce3eee2eea335859024eb32afef22563bbd11b9', '["*"]', NULL, NULL, '2023-10-18 13:42:29', '2023-10-18 13:42:29'),
	(6, 'App\\Models\\User', 3, 'test', 'fa151db7a88d24c3c49521529d4f91341e88903f4bfd914ffc4941f50617b3a9', '["*"]', NULL, NULL, '2023-10-19 06:05:38', '2023-10-19 06:05:38'),
	(7, 'App\\Models\\User', 3, 'test', '7d15bbc11893b84b7bdb9b762011265ab3909ca2be109cdb94222b8926aa7ac1', '["*"]', NULL, NULL, '2023-10-19 06:06:24', '2023-10-19 06:06:24'),
	(8, 'App\\Models\\User', 3, 'test', '3948ad2e11488da726d91810bca5d12e8c090aa17b5c1d0b2040d25c520bde6e', '["*"]', NULL, NULL, '2023-10-19 06:06:34', '2023-10-19 06:06:34'),
	(9, 'App\\Models\\User', 3, 'test', 'f94849e49126d38a69a59fdc34fa170b9daf915d29ca880bbaf9eddbc76060f2', '["*"]', NULL, NULL, '2023-10-20 08:31:11', '2023-10-20 08:31:11'),
	(10, 'App\\Models\\User', 3, 'test', '72173a74ed03a6b31e813b22e5d2ff097d3e9d09ef1bfa5857404df6149ff903', '["*"]', '2023-11-23 07:46:20', NULL, '2023-11-10 09:47:06', '2023-11-23 07:46:20'),
	(11, 'App\\Models\\User', 6, 'test', '631ca66656e670ad1e3043b77ce5365f7cc413354f9596ebaab0ced34c744dd3', '["*"]', '2023-11-23 09:40:34', NULL, '2023-11-10 09:50:16', '2023-11-23 09:40:34'),
	(12, 'App\\Models\\User', 3, 'test', '69ed16542cfe503df5ac615b647bf6dda899a6b0f1d5f78c32741fa69fdf249c', '["*"]', NULL, NULL, '2023-11-23 07:46:19', '2023-11-23 07:46:19'),
	(13, 'App\\Models\\User', 3, 'test', 'd0647788479c4e25b03f2d799a997383f1ea182dad6fa69946bb2cf98173218b', '["*"]', '2023-11-23 07:47:20', NULL, '2023-11-23 07:46:41', '2023-11-23 07:47:20'),
	(14, 'App\\Models\\User', 3, 'test', 'f09f8ba4685d4aecf9bc124b9231a587655f50480349355b6b9819ce33cca74c', '["*"]', '2023-11-24 10:10:54', NULL, '2023-11-23 07:47:19', '2023-11-24 10:10:54'),
	(15, 'App\\Models\\User', 6, 'test', 'de0d0cff62a4939f42dd6707f4b223dc7fc1c09f418f3b3d6627bd1b42461753', '["*"]', '2023-11-23 09:40:44', NULL, '2023-11-23 09:40:43', '2023-11-23 09:40:44'),
	(16, 'App\\Models\\User', 7, 'test', 'bfac783ad19586d8614d0855c2c03bb07e3f51dcbeea64cc37f197e1c6a7b06f', '["*"]', '2023-11-23 09:41:13', NULL, '2023-11-23 09:41:12', '2023-11-23 09:41:13'),
	(17, 'App\\Models\\User', 3, 'test', 'c2861ff188398c07a798e0e2557e1556fa0327a5a2812d09ac43d698d964686a', '["*"]', '2023-11-24 10:35:19', NULL, '2023-11-24 10:10:54', '2023-11-24 10:35:19'),
	(18, 'App\\Models\\User', 7, 'test', '0602969347b3734a309b058a77d6bad16a9ab4d1ac74b415626753fb6b2eba66', '["*"]', '2023-11-24 10:11:21', NULL, '2023-11-24 10:11:20', '2023-11-24 10:11:21'),
	(19, 'App\\Models\\User', 7, 'test', 'a370fc2f26807085b0548bb7d8fc5648643c87ba6b631d1dba9de5fe0dd1c359', '["*"]', '2023-11-24 10:12:53', NULL, '2023-11-24 10:12:53', '2023-11-24 10:12:53'),
	(20, 'App\\Models\\User', 8, 'test', '52c744c9450cf2ac4a8d0fd461b51555c795b45f60d76a453b6db04a84e5314b', '["*"]', '2023-11-24 10:35:19', NULL, '2023-11-24 10:13:20', '2023-11-24 10:35:19'),
	(21, 'App\\Models\\User', 3, 'test', '896dfdb90398fb1c71f899538beb4df2f9d7cb5c4028d19fd726bf3982f54a4f', '["*"]', '2023-12-08 08:17:50', NULL, '2023-12-08 08:17:49', '2023-12-08 08:17:50'),
	(22, 'App\\Models\\User', 3, 'test', '79e5e6447d6b3d68d4087fbf11c65ea04b28b26f593ccc41c23e9460f4577b1c', '["*"]', '2023-12-08 09:50:19', NULL, '2023-12-08 08:18:22', '2023-12-08 09:50:19'),
	(23, 'App\\Models\\User', 3, 'test', 'a23c3bbad8c4193a02d3595082ffe43d2aa6e74cfbe669e039fe80d287565560', '["*"]', '2023-12-17 19:30:50', NULL, '2023-12-08 09:50:43', '2023-12-17 19:30:50'),
	(24, 'App\\Models\\User', 3, 'test', '5d1f206f6bed2b0bfffb2d23e7f6e7894c220837b08a51c0273b184db9c77101', '["*"]', '2023-12-17 19:38:41', NULL, '2023-12-17 19:30:50', '2023-12-17 19:38:41'),
	(25, 'App\\Models\\User', 3, 'test', 'd9464ef823eac1d4df2fe0f6906e29b862ae37f983d1419229ff1538c3901ab2', '["*"]', '2023-12-17 23:09:22', NULL, '2023-12-17 19:38:40', '2023-12-17 23:09:22'),
	(26, 'App\\Models\\User', 3, 'test', 'e6fbd958bb7f2f6d6e241295fba17503fded824b7cdb2c909d9704cc02518cbe', '["*"]', '2023-12-17 23:10:05', NULL, '2023-12-17 23:09:43', '2023-12-17 23:10:05'),
	(27, 'App\\Models\\User', 3, 'test', 'c82fc440b1253755c6500c908448921dc10573db809215a1754cd66a56ba56e6', '["*"]', '2023-12-18 07:54:40', NULL, '2023-12-17 23:10:05', '2023-12-18 07:54:40'),
	(28, 'App\\Models\\User', 3, 'test', '62dc6ffdc0273da16895e3d19aff7fee43336146d6fe9701abd55992f7bd560c', '["*"]', '2023-12-18 08:18:15', NULL, '2023-12-18 08:17:36', '2023-12-18 08:18:15'),
	(29, 'App\\Models\\User', 3, 'test', '4dcd30e71ec17a081ce64e8897f91ccf5c1ae132beef069252fda204f360e8c8', '["*"]', '2023-12-18 08:34:09', NULL, '2023-12-18 08:18:15', '2023-12-18 08:34:09'),
	(30, 'App\\Models\\User', 3, 'test', '054ad37a1de8d152f8014a664a4e272cd2c09e36d032dee7aa5f54be7a735f21', '["*"]', '2023-12-18 08:40:16', NULL, '2023-12-18 08:34:09', '2023-12-18 08:40:16'),
	(31, 'App\\Models\\User', 3, 'test', 'a0001e344540a972e48a83429e0960ae04aeb52b2700e0a013d0062104d8dbf9', '["*"]', '2023-12-18 08:43:21', NULL, '2023-12-18 08:40:15', '2023-12-18 08:43:21'),
	(32, 'App\\Models\\User', 3, 'test', '72539f63eca2196bc9197e71d2de57d839411fa30e93583f5a01e6e02e8a8843', '["*"]', '2023-12-18 08:44:54', NULL, '2023-12-18 08:44:49', '2023-12-18 08:44:54'),
	(33, 'App\\Models\\User', 3, 'test', 'e0dd15efd3b6cd2851643697a2bd10580192b6115fb21831ee6aea93334359bd', '["*"]', '2023-12-18 08:45:10', NULL, '2023-12-18 08:45:03', '2023-12-18 08:45:10'),
	(34, 'App\\Models\\User', 3, 'test', '498d047b60fbb289ea7941684dbca195a9318cbe859ec840b72326247d8a2c3b', '["*"]', '2023-12-18 08:47:25', NULL, '2023-12-18 08:47:24', '2023-12-18 08:47:25'),
	(35, 'App\\Models\\User', 3, 'test', 'a0e50de92daa335bf9777c7852ba6b0f19bea18f6261335000b5ffc30fa0521c', '["*"]', '2023-12-18 08:47:38', NULL, '2023-12-18 08:47:34', '2023-12-18 08:47:38'),
	(36, 'App\\Models\\User', 3, 'test', 'fc8e05c37a6b6b46d7aaf80955d32883f89e68035925e576ce3f0bf25be6f1b2', '["*"]', '2023-12-18 11:24:07', NULL, '2023-12-18 08:47:47', '2023-12-18 11:24:07'),
	(37, 'App\\Models\\User', 3, 'test', '36237f5cd6c163c344b58dcf17fefe12eaf4ac76f0354272ea24cc94110a7b28', '["*"]', '2023-12-18 12:06:38', NULL, '2023-12-18 11:24:07', '2023-12-18 12:06:38'),
	(38, 'App\\Models\\User', 3, 'test', '7ba666f37cf838c9e24e29f24abfe791e45ab873bb6b89830dce82f0fa1caa46', '["*"]', '2023-12-18 12:32:58', NULL, '2023-12-18 12:06:38', '2023-12-18 12:32:58'),
	(39, 'App\\Models\\User', 3, 'test', 'a12464e1e98c191f3e62d3829f7728737df4b90afea5dd463c755d624a623470', '["*"]', '2023-12-18 12:33:11', NULL, '2023-12-18 12:33:11', '2023-12-18 12:33:11'),
	(40, 'App\\Models\\User', 3, 'test', '313d8e6c201dd1a8d8e2dea63aa84178a4c9bd9b73fd8d10f94fa4d46df95f10', '["*"]', '2023-12-18 12:33:52', NULL, '2023-12-18 12:33:40', '2023-12-18 12:33:52'),
	(41, 'App\\Models\\User', 3, 'test', '565ffa172afc42a286530b68080d80fe73693ed31c87d3529729bdfd1575d38c', '["*"]', '2023-12-18 12:34:24', NULL, '2023-12-18 12:34:13', '2023-12-18 12:34:24'),
	(42, 'App\\Models\\User', 3, 'test', 'd3efdfe1b562479360428e57e8d43700e463e2beef0dcce464e42aa59499e6df', '["*"]', NULL, NULL, '2023-12-18 12:34:24', '2023-12-18 12:34:24'),
	(43, 'App\\Models\\User', 3, 'test', 'fd70e28bd06f85c004c9edc024a3e4e197264835cacd392928b00c81c63e189e', '["*"]', '2023-12-18 12:35:40', NULL, '2023-12-18 12:35:02', '2023-12-18 12:35:40'),
	(44, 'App\\Models\\User', 3, 'test', 'a98b31a550d1bdbe0f67c380ea67b2679a4f1f44485a13593f321dd28dfd7534', '["*"]', '2023-12-18 12:59:44', NULL, '2023-12-18 12:35:52', '2023-12-18 12:59:44'),
	(45, 'App\\Models\\User', 8, 'test', 'e2fd1eab5f2d1443152a0f3c20a3a7aada752f49b70f35d7d3dceed78b3f82b2', '["*"]', '2023-12-18 12:36:37', NULL, '2023-12-18 12:36:37', '2023-12-18 12:36:37'),
	(46, 'App\\Models\\User', 6, 'test', 'e82f140f70c2910c9bacd56905df7cf47d6c40dd792d1861c21ba6ae7eb4e9be', '["*"]', '2023-12-18 12:37:24', NULL, '2023-12-18 12:37:16', '2023-12-18 12:37:24'),
	(47, 'App\\Models\\User', 3, 'test', '27563c16fbf6afdef50c173074f9150be48e1b80196f27fa3ae2ac7e7808ef4b', '["*"]', '2023-12-18 12:59:58', NULL, '2023-12-18 12:59:43', '2023-12-18 12:59:58'),
	(48, 'App\\Models\\User', 3, 'test', 'a12ae6909a0737e16011f9cc3365411f51db3460d1afacac567d3c31b55a86a2', '["*"]', '2023-12-18 13:40:32', NULL, '2023-12-18 12:59:58', '2023-12-18 13:40:32'),
	(49, 'App\\Models\\User', 3, 'test', '6828e75b610a65b8bdf996f80b19057a8c8c19467ef1447e31d10e95f751b247', '["*"]', '2023-12-18 13:42:52', NULL, '2023-12-18 13:40:32', '2023-12-18 13:42:52'),
	(50, 'App\\Models\\User', 3, 'test', '38d3b963af5c8f12daa0cfd7ed5e825832ca07fc2f1ebef337deae5eb6a80fa2', '["*"]', '2023-12-18 13:43:50', NULL, '2023-12-18 13:42:51', '2023-12-18 13:43:50'),
	(51, 'App\\Models\\User', 3, 'test', '8e177aab4b237a0d095f98bc87bed26377afd2d5ec7423f1d6b6102ac665ffab', '["*"]', '2023-12-18 14:22:48', NULL, '2023-12-18 13:43:50', '2023-12-18 14:22:48'),
	(52, 'App\\Models\\User', 3, 'test', 'e35dab1a5d4f514fc9b4c98c66049de4fcb7c438e99cb4c3f45c23e6e138e266', '["*"]', '2023-12-18 14:48:20', NULL, '2023-12-18 14:48:17', '2023-12-18 14:48:20'),
	(53, 'App\\Models\\User', 3, 'test', '80155253423cbf1f3603de428ad6608510110289ac31e3fbf791a648c82d7ba9', '["*"]', '2023-12-21 07:53:46', NULL, '2023-12-18 14:48:19', '2023-12-21 07:53:46'),
	(54, 'App\\Models\\User', 3, 'test', 'd311f20277b4c52b99c3f13dc7f00a4a6e62b5a820c1b8bf15f94033215ab4ba', '["*"]', '2023-12-22 09:28:17', NULL, '2023-12-21 07:53:59', '2023-12-22 09:28:17'),
	(55, 'App\\Models\\User', 3, 'test', 'be0fc96405a629f4c9237de82988704f4e7586fa5e951864abad7230a0ffe12c', '["*"]', '2023-12-22 09:29:16', NULL, '2023-12-22 09:28:58', '2023-12-22 09:29:16'),
	(56, 'App\\Models\\User', 3, 'test', 'f315b42c00fe1099d53e2c5af2b5e647e25327da0114ab89c644600b41dd03c3', '["*"]', NULL, NULL, '2023-12-22 10:18:32', '2023-12-22 10:18:32'),
	(57, 'App\\Models\\User', 3, 'test', '751dd92d0bea29904468e746a9d4343512023e372db3fa796ada28324bb2ebf2', '["*"]', '2023-12-28 15:15:23', NULL, '2023-12-22 10:18:45', '2023-12-28 15:15:23'),
	(58, 'App\\Models\\User', 3, 'test', '0f06e1527c160f09cbf22cc9ec5f937e193eab515b601b17366418ff55f11f0f', '["*"]', '2024-01-08 14:00:57', NULL, '2023-12-28 15:16:08', '2024-01-08 14:00:57'),
	(59, 'App\\Models\\User', 3, 'test', '37348cc79b7a73cdc66faca4a45d1864d1b3c472bf719c3ce837f8f2be3474f6', '["*"]', '2024-01-08 14:07:33', NULL, '2024-01-08 14:01:27', '2024-01-08 14:07:33'),
	(60, 'App\\Models\\User', 3, 'test', '83c094303cf63fc9b8a9169c4c3516cbe643e84ed3b657a1082a19a3692bd5a8', '["*"]', '2024-01-08 14:14:53', NULL, '2024-01-08 14:14:41', '2024-01-08 14:14:53'),
	(61, 'App\\Models\\User', 3, 'test', 'b66d012b4706a7c9b0b59d273bb051bf9dc984709459550c4339922ecbc88192', '["*"]', '2024-01-10 12:47:25', NULL, '2024-01-08 15:36:24', '2024-01-10 12:47:25'),
	(62, 'App\\Models\\User', 3, 'test', '8cea295031378a2244ad1dcac9e3f508bf73ef268ee2226cd322fb25c7054c06', '["*"]', '2024-01-11 07:50:34', NULL, '2024-01-10 12:48:06', '2024-01-11 07:50:34'),
	(63, 'App\\Models\\User', 3, 'test', '0a0c7ce63fe614187e10c504156e76391c541ba937c81801e4c784b09ac18d03', '["*"]', '2024-01-11 08:21:48', NULL, '2024-01-11 07:50:48', '2024-01-11 08:21:48'),
	(64, 'App\\Models\\User', 8, 'test', '29526158e9b8bea94ce7bb12a875c2454635e1fa22d4d735bd34471a216950ed', '["*"]', '2024-01-11 07:53:12', NULL, '2024-01-11 07:51:15', '2024-01-11 07:53:12'),
	(65, 'App\\Models\\User', 8, 'test', 'bc8d913fea4adf39bdf46ea26bf76e70f5f63802d731c9828b50fb344257cd23', '["*"]', '2024-01-12 00:01:54', NULL, '2024-01-11 07:55:21', '2024-01-12 00:01:54'),
	(66, 'App\\Models\\User', 3, 'test', 'dc4ad803902de2ecb599f8de2ecf14a8679d953675886186a38128499f783664', '["*"]', '2024-01-12 08:57:38', NULL, '2024-01-11 08:22:40', '2024-01-12 08:57:38'),
	(67, 'App\\Models\\User', 8, 'test', '825121160e8e68754d0f092ce281e399b240e255c19fd4e1fc8d8dc2d4f07462', '["*"]', NULL, NULL, '2024-01-12 00:12:21', '2024-01-12 00:12:21'),
	(68, 'App\\Models\\User', 8, 'test', '769bf61e5d51ab1620d1ed720d05def435d21b03335ec4ffa4b520cfd7daf299', '["*"]', '2024-01-12 08:44:59', NULL, '2024-01-12 00:27:12', '2024-01-12 08:44:59'),
	(69, 'App\\Models\\User', 8, 'test', '8027eb50833b0dcb6ebd0c8dccd5f7a0104e44edb2a23125581b05915b06858c', '["*"]', '2024-01-12 13:00:30', NULL, '2024-01-12 08:45:11', '2024-01-12 13:00:30'),
	(70, 'App\\Models\\User', 3, 'test', 'e6ea2ed8d18131ef2e9c3ea482123530edc0fd4666c45c4c55963cd76dc0ec9b', '["*"]', '2024-01-12 08:59:28', NULL, '2024-01-12 08:58:12', '2024-01-12 08:59:28'),
	(71, 'App\\Models\\User', 3, 'test', 'f0fd8ab8a5b6af66a75617aa80c9c9de88130ffdf6df103fdba9beeeba14cfca', '["*"]', '2024-01-12 09:03:44', NULL, '2024-01-12 09:02:57', '2024-01-12 09:03:44'),
	(72, 'App\\Models\\User', 3, 'test', 'a8607764ee5a740307199e36f73fc311bbc5fa5f3282453aef65ba4548b2843c', '["*"]', '2024-01-12 09:12:02', NULL, '2024-01-12 09:11:09', '2024-01-12 09:12:02'),
	(73, 'App\\Models\\User', 3, 'test', 'afa1a3748d636e4b8e4b5fc345926bd9d36114c2122ebad67ebaa0d9f7308fb0', '["*"]', '2024-01-12 09:14:15', NULL, '2024-01-12 09:12:34', '2024-01-12 09:14:15'),
	(74, 'App\\Models\\User', 3, 'test', '2755f1998777c6ce759631d3d65afba45f795e0a9075f46dfb1ba56b8a9a1ba2', '["*"]', NULL, NULL, '2024-01-12 09:14:23', '2024-01-12 09:14:23'),
	(75, 'App\\Models\\User', 3, 'test', '2fcf59cf25e47a4a365bfb4978390e5402775ec17f7e75f1cd12aa332aa24d4b', '["*"]', NULL, NULL, '2024-01-12 09:26:31', '2024-01-12 09:26:31'),
	(76, 'App\\Models\\User', 3, 'test', '4de537ba10097f5a6e61b5bf58f5f57c71ae034a6cd9299b7f9f91ed81665209', '["*"]', '2024-01-12 09:26:48', NULL, '2024-01-12 09:26:44', '2024-01-12 09:26:48'),
	(77, 'App\\Models\\User', 3, 'test', '03a66c6c464486e6cf7aa98d6c4246b8393a6bedb2ec1ff25276e7e06d2f1ea5', '["*"]', '2024-01-12 09:28:00', NULL, '2024-01-12 09:27:53', '2024-01-12 09:28:00'),
	(78, 'App\\Models\\User', 3, 'test', '6b9f026fc39d60f7c1518d792686448888e21e1fa3bf267b9f3135ef0d6d6cf1', '["*"]', '2024-01-12 10:20:04', NULL, '2024-01-12 09:29:25', '2024-01-12 10:20:04'),
	(79, 'App\\Models\\User', 3, 'test', '5939ca68628c8541e3e0e08bd339a6824603ee36d651ae2201f3fed5bbf2ec0d', '["*"]', '2024-01-12 10:21:47', NULL, '2024-01-12 10:20:23', '2024-01-12 10:21:47'),
	(80, 'App\\Models\\User', 3, 'test', '2240c22f53c90257bc559e4e9a0535038655373e296fa77dc04ebb3ae2cf3812', '["*"]', '2024-01-12 10:43:46', NULL, '2024-01-12 10:22:39', '2024-01-12 10:43:46'),
	(81, 'App\\Models\\User', 3, 'test', '4b0bcba1ca6d7bc825ec0c88b3e1e3c3aa292cf4e5c9b442154ed69bf0c71219', '["*"]', '2024-01-12 12:02:24', NULL, '2024-01-12 11:58:01', '2024-01-12 12:02:24'),
	(82, 'App\\Models\\User', 3, 'test', 'ba2bacedf9fbecf81382c08d7864a9fb03d3f6ae57478c3d442c6a35a8bb1070', '["*"]', NULL, NULL, '2024-01-12 12:02:24', '2024-01-12 12:02:24'),
	(83, 'App\\Models\\User', 3, 'test', '289418c5bb0ed4d032bd72d1f1e0e47bcf7401ec7c92583d486110d3ada3e9c0', '["*"]', '2024-01-12 12:15:57', NULL, '2024-01-12 12:02:41', '2024-01-12 12:15:57'),
	(84, 'App\\Models\\User', 3, 'test', '339167dbffadd93e45644349c394a3b4bcd372b32191cbe9342806f366b9b82f', '["*"]', '2024-01-12 12:24:13', NULL, '2024-01-12 12:16:21', '2024-01-12 12:24:13'),
	(85, 'App\\Models\\User', 3, 'test', '1048f4ce60ca545c39d78a38405a4268458bb297cf911752f6913c5ec322ff90', '["*"]', '2024-01-12 12:25:14', NULL, '2024-01-12 12:24:38', '2024-01-12 12:25:14'),
	(86, 'App\\Models\\User', 3, 'test', '7abe960eaeabe6fbff44d16628eaa19ac68fe79a79ae70a08f6da304fdfa66e1', '["*"]', '2024-01-12 12:27:56', NULL, '2024-01-12 12:26:23', '2024-01-12 12:27:56'),
	(87, 'App\\Models\\User', 3, 'test', '6ee8840c8c0c788598cf68e53cb879413dcb24ce82f1d4c089280bd8d8b20966', '["*"]', '2024-01-12 12:29:11', NULL, '2024-01-12 12:28:08', '2024-01-12 12:29:11'),
	(88, 'App\\Models\\User', 3, 'test', '7fe7c874bbedf3e665868fa8c67ece7d8834fc9d941cfb6fc04e86dbcdc4937c', '["*"]', '2024-01-12 12:43:30', NULL, '2024-01-12 12:29:18', '2024-01-12 12:43:30'),
	(89, 'App\\Models\\User', 3, 'test', 'cdc295dff2dc795492edf02c34de24f04c49e1df8ab033234ab0c7eed326d6e0', '["*"]', '2024-01-12 12:44:01', NULL, '2024-01-12 12:43:41', '2024-01-12 12:44:01'),
	(90, 'App\\Models\\User', 3, 'test', 'ca274328e9043d411dcaf3e93d7e216c195d0a4c0eb12834960e137b37977e29', '["*"]', '2024-01-12 12:50:12', NULL, '2024-01-12 12:44:12', '2024-01-12 12:50:12'),
	(91, 'App\\Models\\User', 3, 'test', 'a78e69c6094b7aed2ccf2dbdaae0c3fdae0b0dd38ca58b8d1b4f3b3453a47142', '["*"]', '2024-01-12 12:54:27', NULL, '2024-01-12 12:50:29', '2024-01-12 12:54:27'),
	(92, 'App\\Models\\User', 3, 'test', '8ec08781b825df68c9ccea14426fa4b20fcc8553e607ddabc3f534f64423b203', '["*"]', '2024-01-12 15:06:08', NULL, '2024-01-12 12:54:46', '2024-01-12 15:06:08'),
	(93, 'App\\Models\\User', 6, 'test', 'dd0d6a65597b7494feef72baf927820c4e6d9df7bfdb21628fb863a03ccb242d', '["*"]', '2024-01-12 12:59:39', NULL, '2024-01-12 12:59:29', '2024-01-12 12:59:39'),
	(94, 'App\\Models\\User', 6, 'test', '5b9234471a6b6bdc719a5334cfdfdb83aa57bd73df913deb250df475dcbcc8ea', '["*"]', '2024-01-12 13:00:07', NULL, '2024-01-12 12:59:55', '2024-01-12 13:00:07'),
	(95, 'App\\Models\\User', 8, 'test', 'b19fa9dcaef90c9b127dd494d6c98187d839a8c06855540946d32716f02cb59a', '["*"]', '2024-01-14 16:40:52', NULL, '2024-01-12 13:00:37', '2024-01-14 16:40:52'),
	(96, 'App\\Models\\User', 3, 'test', 'c6a863142ff8cd66002c63b51aadb29a7b4e10cb6f44e8a5c1b65e9109a75448', '["*"]', '2024-01-12 15:19:37', NULL, '2024-01-12 15:09:37', '2024-01-12 15:19:37'),
	(97, 'App\\Models\\User', 17, 'token-name', '3868df7e5a1261fd4a02a34669eeaf30ff8d5dadbc0261ac8ccb9014c6b8686d', '["*"]', NULL, NULL, '2024-01-12 22:00:16', '2024-01-12 22:00:16'),
	(98, 'App\\Models\\User', 17, 'token-name', '7bc2368edbd7ea0cd7d5f0fabe240215664a305860ae0e013e6bfaf0020777df', '["*"]', NULL, NULL, '2024-01-12 22:01:54', '2024-01-12 22:01:54'),
	(99, 'App\\Models\\User', 17, 'token-name', 'f5de81fb129ce60c07029e3f32341b81054d3d33c9a2cb7d3c5281dd4c2bfd81', '["*"]', NULL, NULL, '2024-01-12 22:22:17', '2024-01-12 22:22:17'),
	(100, 'App\\Models\\User', 17, 'token-name', 'f5d822db505fe035bd27318d57cccef6548bcf3adbaed1c5ca512729edbf4b74', '["*"]', NULL, NULL, '2024-01-12 22:26:15', '2024-01-12 22:26:15'),
	(101, 'App\\Models\\User', 3, 'test', 'c8bdbc9b21916ab26b7bdda713464fcf2ffc458b1672855ee491bdab7b0b1850', '["*"]', '2024-01-14 15:36:13', NULL, '2024-01-14 12:27:03', '2024-01-14 15:36:13'),
	(102, 'App\\Models\\User', 17, 'token-name', '72587881ca77a1936c4dc43abb849e4884fe3d2a8f9f67aa93f9daf37c111e0e', '["*"]', NULL, NULL, '2024-01-14 15:36:37', '2024-01-14 15:36:37'),
	(103, 'App\\Models\\User', 17, 'token-name', '036f7a26e430e52ae5cd0ac795bf475eb68172e3517a323f1d3bf15d1f7bfb85', '["*"]', NULL, NULL, '2024-01-14 15:37:33', '2024-01-14 15:37:33'),
	(104, 'App\\Models\\User', 17, 'token-name', '2d5df5a1786ab1a50d57f9414154108cebe44f0a0cccf4fb021e87cd8ac0d9e3', '["*"]', NULL, NULL, '2024-01-14 15:40:52', '2024-01-14 15:40:52'),
	(105, 'App\\Models\\User', 3, 'test', 'e260ff5dac84e10197644eaabd4fd148082f212b9ce1ed713c0a774414a09063', '["*"]', '2024-01-14 16:32:45', NULL, '2024-01-14 16:32:43', '2024-01-14 16:32:45'),
	(106, 'App\\Models\\User', 3, 'test', '39ec953ea88bc77121914bb99867240382b75e36c4c5c7a08d5baf1b65a48102', '["*"]', '2024-01-14 20:43:36', NULL, '2024-01-14 16:34:31', '2024-01-14 20:43:36'),
	(107, 'App\\Models\\User', 3, 'test', '7f8c4f2788edad99b70e74e6f16b1fcab54e7ea50895aa27cb6a6bfb9b494d46', '["*"]', '2024-01-14 16:36:15', NULL, '2024-01-14 16:36:14', '2024-01-14 16:36:15'),
	(108, 'App\\Models\\User', 3, 'test', '946f57172fac841e257a08412a7069a0ceeaa0b066d4de9c5b63664ed277b5cd', '["*"]', '2024-01-14 16:37:30', NULL, '2024-01-14 16:36:54', '2024-01-14 16:37:30'),
	(109, 'App\\Models\\User', 8, 'test', '4fcb0dcd270a93ecd53c25d79b1f1a63c98c8f5dcd25fd8661944170d0091289', '["*"]', '2024-01-14 16:52:40', NULL, '2024-01-14 16:52:10', '2024-01-14 16:52:40'),
	(110, 'App\\Models\\User', 8, 'test', '4c49dd2c8f17193c6a900b1d3e3bc8f6e724469a9c96d06431fbaf6ba5a87bb3', '["*"]', '2024-01-14 17:05:35', NULL, '2024-01-14 17:05:33', '2024-01-14 17:05:35'),
	(111, 'App\\Models\\User', 17, 'token-name', '457178a0bdfe6195a94dcb4a1b87a7f1de83c8a181b0341ba4cdb04ebf81b583', '["*"]', NULL, NULL, '2024-01-14 17:21:56', '2024-01-14 17:21:56'),
	(112, 'App\\Models\\User', 8, 'test', 'aab6f1807c503676350b7b9dbba3c4de991b6a8d84ef2a692e6158c4edc0b86a', '["*"]', '2024-01-14 18:03:08', NULL, '2024-01-14 18:03:06', '2024-01-14 18:03:08'),
	(113, 'App\\Models\\User', 17, 'token-name', 'b330e3ac7a320c3f38868a466ad773b03544ad5b23963c1258a217b32fdd3071', '["*"]', NULL, NULL, '2024-01-14 18:04:13', '2024-01-14 18:04:13'),
	(114, 'App\\Models\\User', 17, 'token-name', '93e1419c7aa1aff5bb8f01aca58d59e63fa82b22d88989cc74da360877f6d6c6', '["*"]', NULL, NULL, '2024-01-14 18:05:02', '2024-01-14 18:05:02'),
	(115, 'App\\Models\\User', 17, 'token-name', '463c1a6d6c88cb71eea04bd9d0d8da105db05cc0c3f5abc4ec23a54128cfadea', '["*"]', NULL, NULL, '2024-01-14 18:05:18', '2024-01-14 18:05:18'),
	(116, 'App\\Models\\User', 17, 'token-name', '19b71a9b4bf592123a7e79354c4174ed1bcc66a7a9bd096eab118dc94e3add19', '["*"]', NULL, NULL, '2024-01-14 18:05:21', '2024-01-14 18:05:21'),
	(117, 'App\\Models\\User', 17, 'token-name', '13e994ac797ee11883d16fc10437348d45ba31aa6d34b4f6719260b854091f19', '["*"]', NULL, NULL, '2024-01-14 18:05:37', '2024-01-14 18:05:37'),
	(118, 'App\\Models\\User', 3, 'test', '249432af7139896824ef0061553de5e1f2a1ddd88c657bafc4f055ef72e6381b', '["*"]', '2024-01-14 21:48:16', NULL, '2024-01-14 20:49:25', '2024-01-14 21:48:16');

-- Listage des données de la table monappli.posts : ~1 rows (environ)
INSERT INTO `posts` (`id`, `title`, `slug`, `content`, `created_at`, `updated_at`, `user_id`) VALUES
	(1, 'Le bruit des lumières', 'le-bruit', 'Il était une fois un vieux terrain de foot où je faisais ceci et celà,bref t\'as capté je fais des tests', NULL, NULL, 1);

-- Listage des données de la table monappli.quiz_joueurs : ~3 rows (environ)
INSERT INTO `quiz_joueurs` (`id`, `nom_joueur`, `age`, `club`, `poste`, `nationalite`, `image_joueur`, `propositions`, `created_at`, `updated_at`) VALUES
	(1, 'Cristiano Ronaldo', 38, 'Al Nasser', 'BU', 'Portugal', 'https://asquinas.fr/wp-content/uploads/2024/01/IMG_6715-scaled.jpeg', 'Cristiano Ronaldo', NULL, NULL),
	(2, 'Lionel Messi', 35, 'Miami', 'Ailier', 'Argentine', 'https://assets-fr.imgfoot.com/lionel-messi-psg-2223-1.jpg', 'Lionel Messi', NULL, NULL),
	(3, 'Kylian Mbappé', 25, 'PSG', 'BU', 'France', 'https://assets-fr.imgfoot.com/media/cache/1200x900/mbappe-dembele.jpg', 'Kylian Mbappé', NULL, NULL);

-- Listage des données de la table monappli.quiz_logos : ~4 rows (environ)
INSERT INTO `quiz_logos` (`id`, `nom`, `image`, `propositions`, `created_at`, `updated_at`) VALUES
	(1, 'Real Madrid', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png', '["Real Madrid","Atlético Madrid", "Bayer Leverkusen"]', NULL, NULL),
	(2, 'PSG', 'https://www.psg.fr/img/DefaultOpenGraphImage.jpg?20231124', '["Saint-Denis FC", "Le Havre","PSG"] ', NULL, NULL),
	(3, 'AC Milan', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/langfr-130px-Logo_of_AC_Milan.svg.png', '["Inter Milan","AC Milan","Juventus"]', NULL, NULL),
	(4, 'FC Barcelona', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_FC_Barcelona.svg/1200px-Logo_FC_Barcelona.svg.png', '["FC Girona","Espanyol Barcelona", "FC Barcelona"]', NULL, NULL);

-- Listage des données de la table monappli.users : ~14 rows (environ)
INSERT INTO `users` (`id`, `username`, `password`, `first_name`, `last_name`, `date_of_birth`, `gender`, `email`, `user_image`, `created_at`, `updated_at`, `bio`, `team`, `facebook_link`, `instagram_link`, `twitter_link`) VALUES
	(1, 'yassrx7', 'yassdaking', 'Yasser', 'Razzaki', '2003-04-29', 'male', 'yssrx7@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(2, 'malogst', 'gustoooo', 'Malo', 'gusto', '2003-04-28', 'male', 'malogst@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(3, 'Yasser Razzaki', NULL, 'Yasser', 'Razzaki', NULL, NULL, 'yasserrazzaki0@gmail.com', 'https://lh3.googleusercontent.com/a/ACg8ocLuYLoMn5nIAC4ZMv11Q93aOQKw1YoOxgrOO-sum6X9dg=s360-c-no', '2023-10-18 07:31:04', '2024-01-12 12:10:29', 'Baller, and dreamer', 'Real Madrid', 'hey', 'hi', 'vfdvdd'),
	(6, 'Yasser Razzaki2 (Yassrx7)', NULL, NULL, NULL, NULL, NULL, 'yasserrazzaki7@gmail.com', NULL, '2023-11-10 09:50:16', '2023-11-10 09:50:16', NULL, NULL, NULL, NULL, NULL),
	(8, 'Amar Razzaki', NULL, NULL, NULL, NULL, NULL, 'amarrazzaki4@gmail.com', 'https://lh3.googleusercontent.com/a/ACg8ocKYaAP8xDPIYA7pY7n2mFtCNLVU3M-YYotVUGl9WvbpgA=s96-c', '2023-11-24 10:13:20', '2024-01-11 07:58:44', 'Yasser', NULL, NULL, NULL, NULL),
	(9, 'razayasser@hotmail.fr', '$2y$10$BZCxcmPrOXGJKyoCzLLHiebxPqfiipDng43VLBE1hdcaeplg.N2Z.', NULL, NULL, NULL, NULL, 'razayasser@hotmail.fr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(10, 'hedaking', '$2y$10$UY7C0vESHya1lCitBeyuX.XBKmTo4tO.yeykMAJ13z2rAy1/GBcf2', NULL, NULL, NULL, NULL, 'razdaking@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(11, 'testzzz', '$2y$10$61/pdqlMY9CCcUHEpZCThutpJxyecGRlOu0pqf6l1sU/tg.JmgN.i', NULL, NULL, NULL, NULL, 'test@mail.fr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(12, 'qsdqsdqd', '$2y$10$5wjdGIY.MEQq61Ol41.5IuPMAfzeWT.kv1SHVCTaJ9YQS7QGYX9Mq', NULL, NULL, NULL, NULL, 'yasserrazzaki54@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(13, '9922076445', '$2y$10$CdP02j1QBLuSVq2so0eMCeoXkVPsCAezDIXSSPWKOP2MkA.6BLNIm', NULL, NULL, NULL, NULL, 'qsdqsd@mail.fr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(14, 'qsdqsdqsd', '$2y$10$ovWDnoq8qpSjLz2VIYC6buMDbarGGzNTLF1h4cYXblIL8vFjqQf2a', NULL, NULL, NULL, NULL, 'yasserrazzakiqsqdsqd0@gmail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(15, 'azeaze', '$2y$10$7AYj8/jVmM8VclAMGs2tyO6Pw1dxRSxvPzrcjKcnjZGH5QVz4VVl2', NULL, NULL, NULL, NULL, 'azeaza@m.fr', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(16, 'moadrazzaki', '$2y$10$Tgqkdj9uWEfLof0h1kachu7DFW3A/wkst/C1VVrz6kmWoMFYSYv9m', NULL, NULL, NULL, NULL, 'qksjfklqjfdq@qsdk', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
	(17, 'Testing', '$2y$10$TLUG3iTmC5rXOg2pGuFZyOC8/5tqC7WxieZL50334PX3tEkMIXFwO', NULL, NULL, NULL, NULL, 'test@mail.com', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- Listage des données de la table monappli.websockets_statistics_entries : ~0 rows (environ)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
