-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 15-Out-2019 às 22:57
-- Versão do servidor: 10.3.16-MariaDB
-- versão do PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `id6136795_redefp`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `access_tokens`
--

CREATE TABLE `access_tokens` (
  `id_access` int(11) NOT NULL,
  `access_token` varchar(32) COLLATE utf8_bin NOT NULL,
  `id_aluno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `access_tokens`
--

INSERT INTO `access_tokens` (`id_access`, `access_token`, `id_aluno`) VALUES
(1, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(2, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(3, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(4, 'f528764d624db129b32c21fbca0cb8d6', 6275);

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda_eventos`
--

CREATE TABLE `agenda_eventos` (
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `dt_inicio` datetime NOT NULL,
  `dt_fim` datetime NOT NULL,
  `id_local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda_local`
--

CREATE TABLE `agenda_local` (
  `id_local` int(11) NOT NULL,
  `geocode_placeid` int(11) NOT NULL,
  `nr_lat` int(11) NOT NULL,
  `nr_lgt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `ra` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `nome` varchar(256) COLLATE utf8_bin NOT NULL,
  `apelido` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(128) COLLATE utf8_bin NOT NULL,
  `institucional` varchar(180) COLLATE utf8_bin NOT NULL,
  `telefone` varchar(13) COLLATE utf8_bin NOT NULL,
  `senha` varchar(32) COLLATE utf8_bin NOT NULL,
  `profile_pic_url` varchar(2048) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `aluno`
--

INSERT INTO `aluno` (`id`, `ra`, `curso`, `ano`, `nome`, `apelido`, `email`, `institucional`, `telefone`, `senha`, `profile_pic_url`) VALUES
(15, 6275, 1, 1, 'Alberto Benedito de Morais Trevisan', 'Bebeto', 'mineplay152@gmail.com', 'alberto.trevisan@etec.sp.gov.br', '15981893297', '21232f297a57a5a743894a0e4a801fc3', '../../uploads/ppd3.png'),
(16, 2165, 1, 1, 'Laura Dias da Silva', 'Lau', 'laura.dsilva15@gmail.com', 'laura.silva@etec.sp.gov.br', '15990000000', '21232f297a57a5a743894a0e4a801fc3', '/uploads/IMG201810141943.jpg'),
(17, 6371, 1, 1, 'Felipe Silva', 'ImBlackYT', 'byonichip@gmail.com', 'felipe.silva1572@etec.sp.gov.br', '15997473867', '1aaed8901b94cf3f5636eedd48362c9e', ''),
(18, 1, 1, 1, 'Jeovana Kitagaki', 'Jeo', 'jeovana.kitagaki@gmail.com', 'jeovana.kitagaki@etec.sp.gov.br', '15981077330', '21232f297a57a5a743894a0e4a801fc3', '/uploads/IMG201811152232.jpeg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_galeria`
--

CREATE TABLE `aluno_galeria` (
  `id_foto` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `dtpublicacao` datetime NOT NULL,
  `txlegenda` varchar(1024) COLLATE utf8_bin NOT NULL,
  `image_url` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `aluno_galeria`
--

INSERT INTO `aluno_galeria` (`id_foto`, `id_aluno`, `dtpublicacao`, `txlegenda`, `image_url`) VALUES
(3, 15, '2019-03-09 03:40:37', 'Minha miga', '../../uploads/watch dogs.png'),
(5, 15, '2019-06-30 03:36:57', '', '../../uploads/bloco3.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_post`
--

CREATE TABLE `aluno_post` (
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `aluno_post`
--

INSERT INTO `aluno_post` (`id_post`, `id_aluno`, `txpost`, `nlike`, `ndeslike`) VALUES
(1, 16, 'Este projeto deve andar', 1007, 1001),
(2, 15, 'Vamos lá, profile.php construir', 5, 1000),
(3, 18, 'Edelson é demais! sz', 1, 0),
(4, 15, 'Mano, que felicidade que eu, to de que este projeto está dando certo.', 2, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_post_comentario`
--

CREATE TABLE `aluno_post_comentario` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `aluno_post_comentario`
--

INSERT INTO `aluno_post_comentario` (`id_comentario`, `id_post`, `id_aluno`, `txcomentario`) VALUES
(1, 1, 15, 'comentando'),
(2, 1, 15, 'comentando'),
(3, 2, 16, 'Caraca, ainda não fez?'),
(4, 1, 15, 'Com certeza'),
(5, 2, 15, 'Esse aqui é top');

-- --------------------------------------------------------

--
-- Estrutura da tabela `api_key`
--

CREATE TABLE `api_key` (
  `id` int(11) NOT NULL,
  `type` int(2) NOT NULL,
  `code` varchar(2048) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `api_key`
--

INSERT INTO `api_key` (`id`, `type`, `code`) VALUES
(1, 1, ' AIzaSyB7hWsWR2KJ4cxdUZif1ITHlu---U7lM-g ');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade`
--

CREATE TABLE `comunidade` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL,
  `tema` int(11) NOT NULL,
  `entrada` int(11) NOT NULL,
  `icon_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  `cover_url` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade`
--

INSERT INTO `comunidade` (`id`, `nome`, `tema`, `entrada`, `icon_url`, `cover_url`) VALUES
(1, 'As Poc da Sofrência', 2, 3, '/css/user.png', ''),
(2, 'ETEC F.P.', 1, 3, '', '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_entrada`
--

CREATE TABLE `comunidade_entrada` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade_entrada`
--

INSERT INTO `comunidade_entrada` (`id`, `nome`) VALUES
(1, 'Convite'),
(2, 'Convocação'),
(3, 'Aberto');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_galeria`
--

CREATE TABLE `comunidade_galeria` (
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `dtpublicacao` datetime NOT NULL,
  `txlegenda` varchar(1024) COLLATE utf8_bin NOT NULL,
  `photo_url` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_inscrito`
--

CREATE TABLE `comunidade_inscrito` (
  `id_inscrito` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade_inscrito`
--

INSERT INTO `comunidade_inscrito` (`id_inscrito`, `id_comunidade`, `id_aluno`) VALUES
(1, 1, 15),
(2, 2, 15),
(3, 2, 16);

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_post`
--

CREATE TABLE `comunidade_post` (
  `id_post` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade_post`
--

INSERT INTO `comunidade_post` (`id_post`, `id_comunidade`, `id_aluno`, `txpost`, `nlike`, `ndeslike`) VALUES
(1, 1, 16, 'Eu sou uma ótima escrava =)', 19, 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_post_comentario`
--

CREATE TABLE `comunidade_post_comentario` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade_post_comentario`
--

INSERT INTO `comunidade_post_comentario` (`id_comentario`, `id_post`, `id_aluno`, `txcomentario`) VALUES
(1, 1, 15, 'Hello puta');

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_tema`
--

CREATE TABLE `comunidade_tema` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `comunidade_tema`
--

INSERT INTO `comunidade_tema` (`id`, `nome`) VALUES
(1, 'ETEC'),
(2, 'LGBT');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `nome` varchar(128) COLLATE utf8_bin NOT NULL,
  `sigla` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `curso`
--

INSERT INTO `curso` (`id`, `nome`, `sigla`) VALUES
(1, 'Informatica para Internet Integrado ao Ensino Médio', 'IPIIEM');

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso_sala`
--

CREATE TABLE `curso_sala` (
  `id` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `seq` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `curso_sala`
--

INSERT INTO `curso_sala` (`id`, `curso`, `seq`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso_sala_ano`
--

CREATE TABLE `curso_sala_ano` (
  `id` int(11) NOT NULL,
  `curso_sala` int(25) NOT NULL,
  `ano` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `curso_sala_ano`
--

INSERT INTO `curso_sala_ano` (`id`, `curso_sala`, `ano`) VALUES
(1, 1, 2018);

-- --------------------------------------------------------

--
-- Estrutura da tabela `direct`
--

CREATE TABLE `direct` (
  `id_mensagem` int(11) NOT NULL,
  `tp_lado_recebido` int(1) NOT NULL,
  `tp_lado_enviado` int(1) NOT NULL,
  `id_lado_recebido` int(11) NOT NULL,
  `id_lado_enviado` int(11) NOT NULL,
  `dt_envio` datetime NOT NULL,
  `dt_lido` datetime DEFAULT NULL,
  `tx_mensagem` varchar(256) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(11) NOT NULL,
  `no_evento` varchar(120) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `dt_evento` datetime NOT NULL,
  `id_local` int(11) NOT NULL,
  `vl_ingresso` int(11) NOT NULL,
  `if_doacao` int(11) NOT NULL,
  `img_url` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `evento`
--

INSERT INTO `evento` (`id_evento`, `no_evento`, `id_organizador`, `dt_evento`, `id_local`, `vl_ingresso`, `if_doacao`, `img_url`) VALUES
(1, 'Apresentação da escola', 1, '2019-03-31 19:00:00', 1, 0, 0, '/uploads/luminova.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_avisos`
--

CREATE TABLE `evento_avisos` (
  `id_aviso` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `tx_post` int(11) NOT NULL,
  `dt_post` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_convite`
--

CREATE TABLE `evento_convite` (
  `id_convite` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_convidado` int(11) NOT NULL,
  `tp_convidado` int(11) NOT NULL,
  `dt_compra` datetime NOT NULL,
  `id_venda` int(11) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `dt_confirma` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_photo`
--

CREATE TABLE `evento_photo` (
  `id_photo` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_photo` varchar(2048) NOT NULL,
  `tx_legenda` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_pub_adm`
--

CREATE TABLE `evento_pub_adm` (
  `id_pub` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_post` varchar(180) NOT NULL,
  `nr_like` int(5) NOT NULL,
  `nr_deslike` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_pub_mem`
--

CREATE TABLE `evento_pub_mem` (
  `id_pub` int(11) NOT NULL,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_post` varchar(180) NOT NULL,
  `nr_like` int(5) NOT NULL,
  `nr_deslike` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `local`
--

CREATE TABLE `local` (
  `id_local` int(11) NOT NULL,
  `no_local` varchar(120) NOT NULL,
  `no_logradouro` varchar(120) NOT NULL,
  `nr_logradouro` int(7) NOT NULL,
  `no_bairro` varchar(120) NOT NULL,
  `no_cidade` varchar(50) NOT NULL,
  `nr_cep` int(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `local`
--

INSERT INTO `local` (`id_local`, `no_local`, `no_logradouro`, `nr_logradouro`, `no_bairro`, `no_cidade`, `nr_cep`) VALUES
(1, 'Escola Luminova - Unidade Sorocaba', 'Rua Ary Annunciato', 80, 'Jd. Maria Antonia Prado', 'Sorocaba', 18077080);

-- --------------------------------------------------------

--
-- Estrutura da tabela `organizador`
--

CREATE TABLE `organizador` (
  `id_organizador` int(11) NOT NULL,
  `no_organizador` varchar(130) NOT NULL,
  `dt_solicitacao` datetime NOT NULL,
  `dt_validacao` datetime NOT NULL,
  `st_validacacao` int(1) NOT NULL,
  `tx_email` varchar(130) NOT NULL,
  `tp_documento` int(1) NOT NULL,
  `nr_documento` int(20) NOT NULL,
  `tx_documento` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `organizador`
--

INSERT INTO `organizador` (`id_organizador`, `no_organizador`, `dt_solicitacao`, `dt_validacao`, `st_validacacao`, `tx_email`, `tp_documento`, `nr_documento`, `tx_documento`) VALUES
(1, 'Escolas Luminova LTDA', '2019-03-01 00:00:00', '2019-03-01 10:00:00', 2, 'maria.morais@escolaluminova.com.br', 2, 183842129, '/uploads/rg-183842129.jpg');

-- --------------------------------------------------------

--
-- Estrutura da tabela `perseguicao`
--

CREATE TABLE `perseguicao` (
  `id_perseguicao` int(11) NOT NULL,
  `id_perseguido` int(11) NOT NULL,
  `id_perseguidor` int(11) NOT NULL,
  `tp_perseguido` int(11) NOT NULL,
  `tp_perseguidor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `perseguicao`
--

INSERT INTO `perseguicao` (`id_perseguicao`, `id_perseguido`, `id_perseguidor`, `tp_perseguido`, `tp_perseguidor`) VALUES
(1, 15, 16, 0, 0),
(2, 15, 17, 0, 0),
(3, 0, 0, 0, 0),
(4, 1, 2, 15, 0),
(5, 1, 15, 2, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professores`
--

CREATE TABLE `professores` (
  `idprofessores` int(11) NOT NULL,
  `noprofessores` varchar(50) COLLATE utf8_bin NOT NULL,
  `txmail_professores` varchar(100) COLLATE utf8_bin NOT NULL,
  `pwsenha_professores` varchar(32) COLLATE utf8_bin NOT NULL,
  `tximagem_professores` varchar(1024) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `professores`
--

INSERT INTO `professores` (`idprofessores`, `noprofessores`, `txmail_professores`, `pwsenha_professores`, `tximagem_professores`) VALUES
(5, 'Luis Flacido', 'luis.flacido@etec.sp.gov.br', '827ccb0eea8a706c4c34a16891f84e7b', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `professores_reunioes`
--

CREATE TABLE `professores_reunioes` (
  `id_reuniao` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL,
  `title_reuniao` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `date_reuniao` date NOT NULL,
  `txpost_reuniao` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `id_local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_produtos`
--

CREATE TABLE `vendas_produtos` (
  `id` int(11) NOT NULL,
  `id_publicacao` int(11) NOT NULL,
  `price` float NOT NULL,
  `image_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  `title` varchar(128) COLLATE utf8_bin NOT NULL,
  `details` varchar(128) COLLATE utf8_bin NOT NULL,
  `type` int(11) NOT NULL,
  `prpview` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_reservas`
--

CREATE TABLE `vendas_reservas` (
  `id_produto` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `tp_venda` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_vendedor`
--

CREATE TABLE `vendas_vendedor` (
  `id` int(11) NOT NULL,
  `type` int(1) NOT NULL,
  `id_interna` int(11) NOT NULL,
  `nr_cpf` int(11) NOT NULL,
  `aprovacao_status` int(1) NOT NULL,
  `dt_aprovacao` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `access_tokens`
--
ALTER TABLE `access_tokens`
  ADD PRIMARY KEY (`id_access`);

--
-- Índices para tabela `agenda_eventos`
--
ALTER TABLE `agenda_eventos`
  ADD PRIMARY KEY (`id_evento`);

--
-- Índices para tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ra` (`ra`),
  ADD KEY `curso` (`curso`),
  ADD KEY `ano` (`ano`);

--
-- Índices para tabela `aluno_galeria`
--
ALTER TABLE `aluno_galeria`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices para tabela `aluno_post`
--
ALTER TABLE `aluno_post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices para tabela `aluno_post_comentario`
--
ALTER TABLE `aluno_post_comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_post` (`id_post`);

--
-- Índices para tabela `api_key`
--
ALTER TABLE `api_key`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `comunidade`
--
ALTER TABLE `comunidade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `entrada` (`entrada`),
  ADD KEY `tema` (`tema`);

--
-- Índices para tabela `comunidade_entrada`
--
ALTER TABLE `comunidade_entrada`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  ADD PRIMARY KEY (`id_inscrito`),
  ADD KEY `id_comunidade` (`id_comunidade`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices para tabela `comunidade_post`
--
ALTER TABLE `comunidade_post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_comunidade` (`id_comunidade`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices para tabela `comunidade_post_comentario`
--
ALTER TABLE `comunidade_post_comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_post` (`id_post`);

--
-- Índices para tabela `comunidade_tema`
--
ALTER TABLE `comunidade_tema`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `curso_sala`
--
ALTER TABLE `curso_sala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso` (`curso`);

--
-- Índices para tabela `curso_sala_ano`
--
ALTER TABLE `curso_sala_ano`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso_sala` (`curso_sala`);

--
-- Índices para tabela `direct`
--
ALTER TABLE `direct`
  ADD PRIMARY KEY (`id_mensagem`);

--
-- Índices para tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`),
  ADD KEY `id_local` (`id_local`);

--
-- Índices para tabela `evento_avisos`
--
ALTER TABLE `evento_avisos`
  ADD PRIMARY KEY (`id_aviso`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`);

--
-- Índices para tabela `evento_convite`
--
ALTER TABLE `evento_convite`
  ADD PRIMARY KEY (`id_convite`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`);

--
-- Índices para tabela `evento_photo`
--
ALTER TABLE `evento_photo`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices para tabela `evento_pub_adm`
--
ALTER TABLE `evento_pub_adm`
  ADD PRIMARY KEY (`id_pub`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices para tabela `evento_pub_mem`
--
ALTER TABLE `evento_pub_mem`
  ADD PRIMARY KEY (`id_pub`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices para tabela `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id_local`);

--
-- Índices para tabela `organizador`
--
ALTER TABLE `organizador`
  ADD PRIMARY KEY (`id_organizador`);

--
-- Índices para tabela `perseguicao`
--
ALTER TABLE `perseguicao`
  ADD PRIMARY KEY (`id_perseguicao`);

--
-- Índices para tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`idprofessores`);

--
-- Índices para tabela `professores_reunioes`
--
ALTER TABLE `professores_reunioes`
  ADD PRIMARY KEY (`id_reuniao`);

--
-- Índices para tabela `vendas_produtos`
--
ALTER TABLE `vendas_produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `vendas_reservas`
--
ALTER TABLE `vendas_reservas`
  ADD PRIMARY KEY (`id_produto`);

--
-- Índices para tabela `vendas_vendedor`
--
ALTER TABLE `vendas_vendedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `access_tokens`
--
ALTER TABLE `access_tokens`
  MODIFY `id_access` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `agenda_eventos`
--
ALTER TABLE `agenda_eventos`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `aluno`
--
ALTER TABLE `aluno`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de tabela `aluno_galeria`
--
ALTER TABLE `aluno_galeria`
  MODIFY `id_foto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `aluno_post`
--
ALTER TABLE `aluno_post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `aluno_post_comentario`
--
ALTER TABLE `aluno_post_comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `api_key`
--
ALTER TABLE `api_key`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `comunidade`
--
ALTER TABLE `comunidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `comunidade_entrada`
--
ALTER TABLE `comunidade_entrada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  MODIFY `id_inscrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `comunidade_post`
--
ALTER TABLE `comunidade_post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `comunidade_post_comentario`
--
ALTER TABLE `comunidade_post_comentario`
  MODIFY `id_comentario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `comunidade_tema`
--
ALTER TABLE `comunidade_tema`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `curso_sala`
--
ALTER TABLE `curso_sala`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `curso_sala_ano`
--
ALTER TABLE `curso_sala_ano`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `direct`
--
ALTER TABLE `direct`
  MODIFY `id_mensagem` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento`
--
ALTER TABLE `evento`
  MODIFY `id_evento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `evento_avisos`
--
ALTER TABLE `evento_avisos`
  MODIFY `id_aviso` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento_convite`
--
ALTER TABLE `evento_convite`
  MODIFY `id_convite` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento_photo`
--
ALTER TABLE `evento_photo`
  MODIFY `id_photo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento_pub_adm`
--
ALTER TABLE `evento_pub_adm`
  MODIFY `id_pub` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `evento_pub_mem`
--
ALTER TABLE `evento_pub_mem`
  MODIFY `id_pub` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `local`
--
ALTER TABLE `local`
  MODIFY `id_local` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `organizador`
--
ALTER TABLE `organizador`
  MODIFY `id_organizador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `perseguicao`
--
ALTER TABLE `perseguicao`
  MODIFY `id_perseguicao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `professores`
--
ALTER TABLE `professores`
  MODIFY `idprofessores` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `professores_reunioes`
--
ALTER TABLE `professores_reunioes`
  MODIFY `id_reuniao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `vendas_produtos`
--
ALTER TABLE `vendas_produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vendas_reservas`
--
ALTER TABLE `vendas_reservas`
  MODIFY `id_produto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `vendas_vendedor`
--
ALTER TABLE `vendas_vendedor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `aluno_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `curso` (`id`);

--
-- Limitadores para a tabela `aluno_galeria`
--
ALTER TABLE `aluno_galeria`
  ADD CONSTRAINT `aluno_galeria_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `aluno_post`
--
ALTER TABLE `aluno_post`
  ADD CONSTRAINT `aluno_post_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `aluno_post_comentario`
--
ALTER TABLE `aluno_post_comentario`
  ADD CONSTRAINT `aluno_post_comentario_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `aluno_post_comentario_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `aluno_post` (`id_post`);

--
-- Limitadores para a tabela `comunidade`
--
ALTER TABLE `comunidade`
  ADD CONSTRAINT `comunidade_ibfk_1` FOREIGN KEY (`entrada`) REFERENCES `comunidade_entrada` (`id`),
  ADD CONSTRAINT `comunidade_ibfk_2` FOREIGN KEY (`tema`) REFERENCES `comunidade_tema` (`id`);

--
-- Limitadores para a tabela `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  ADD CONSTRAINT `comunidade_inscrito_ibfk_1` FOREIGN KEY (`id_comunidade`) REFERENCES `comunidade` (`id`),
  ADD CONSTRAINT `comunidade_inscrito_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `comunidade_post`
--
ALTER TABLE `comunidade_post`
  ADD CONSTRAINT `comunidade_post_ibfk_1` FOREIGN KEY (`id_comunidade`) REFERENCES `comunidade` (`id`),
  ADD CONSTRAINT `comunidade_post_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Limitadores para a tabela `comunidade_post_comentario`
--
ALTER TABLE `comunidade_post_comentario`
  ADD CONSTRAINT `comunidade_post_comentario_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `comunidade_post_comentario_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `comunidade_post` (`id_post`);

--
-- Limitadores para a tabela `curso_sala`
--
ALTER TABLE `curso_sala`
  ADD CONSTRAINT `curso_sala_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `curso` (`id`);

--
-- Limitadores para a tabela `curso_sala_ano`
--
ALTER TABLE `curso_sala_ano`
  ADD CONSTRAINT `curso_sala_ano_ibfk_1` FOREIGN KEY (`curso_sala`) REFERENCES `curso_sala` (`id`);

--
-- Limitadores para a tabela `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`),
  ADD CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`id_local`) REFERENCES `local` (`id_local`);

--
-- Limitadores para a tabela `evento_avisos`
--
ALTER TABLE `evento_avisos`
  ADD CONSTRAINT `evento_avisos_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`),
  ADD CONSTRAINT `evento_avisos_ibfk_2` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`);

--
-- Limitadores para a tabela `evento_convite`
--
ALTER TABLE `evento_convite`
  ADD CONSTRAINT `evento_convite_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`),
  ADD CONSTRAINT `evento_convite_ibfk_2` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`);

--
-- Limitadores para a tabela `evento_photo`
--
ALTER TABLE `evento_photo`
  ADD CONSTRAINT `evento_photo_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`);

--
-- Limitadores para a tabela `evento_pub_adm`
--
ALTER TABLE `evento_pub_adm`
  ADD CONSTRAINT `evento_pub_adm_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
