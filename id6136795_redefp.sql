-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 21/12/2019 às 18:17
-- Versão do servidor: 8.0.18
-- Versão do PHP: 7.1.32

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
-- Estrutura para tabela `access_tokens`
--

CREATE TABLE `access_tokens` (
  `id_access` int(11) NOT NULL,
  `access_token` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `id_aluno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `access_tokens`
--

INSERT INTO `access_tokens` (`id_access`, `access_token`, `id_aluno`) VALUES
(1, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(2, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(3, 'f528764d624db129b32c21fbca0cb8d6', 6275),
(4, 'f528764d624db129b32c21fbca0cb8d6', 6275);

-- --------------------------------------------------------

--
-- Estrutura para tabela `agenda_eventos`
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
-- Estrutura para tabela `agenda_local`
--

CREATE TABLE `agenda_local` (
  `id_local` int(11) NOT NULL,
  `geocode_placeid` int(11) NOT NULL,
  `nr_lat` int(11) NOT NULL,
  `nr_lgt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno`
--

CREATE TABLE `aluno` (
  `id` int(11) NOT NULL,
  `ra` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `nome` varchar(256) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `apelido` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `institucional` varchar(180) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `telefone` varchar(13) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `senha` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `profile_pic_url` varchar(2048) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `aluno`
--

INSERT INTO `aluno` (`id`, `ra`, `curso`, `ano`, `nome`, `apelido`, `email`, `institucional`, `telefone`, `senha`, `profile_pic_url`) VALUES
(15, 6275, 1, 1, 'Alberto Benedito de Morais Trevisan', 'Bebeto', 'mineplay152@gmail.com', 'alberto.trevisan@etec.sp.gov.br', '15981893291', '21232f297a57a5a743894a0e4a801fc3', 'handler/uploads/73457319_564213337670378_4820829983482052608_n.jpg'),
(16, 2165, 1, 1, 'Laura Dias da Silva', 'Lau', 'laura.dsilva15@gmail.com', 'laura.silva@etec.sp.gov.br', '15990000000', '21232f297a57a5a743894a0e4a801fc3', '/uploads/IMG201810141943.jpg'),
(17, 6371, 1, 1, 'Felipe Silva', 'ImBlackYT', 'byonichip@gmail.com', 'felipe.silva1572@etec.sp.gov.br', '15997473867', '1aaed8901b94cf3f5636eedd48362c9e', ''),
(18, 1, 1, 1, 'Jeovana Kitagaki', 'Jeo', 'jeovana.kitagaki@gmail.com', 'jeovana.kitagaki@etec.sp.gov.br', '15981077330', '21232f297a57a5a743894a0e4a801fc3', '/uploads/IMG201811152232.jpeg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno_galeria`
--

CREATE TABLE `aluno_galeria` (
  `id_foto` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `dtpublicacao` varchar(20) COLLATE utf8_bin NOT NULL,
  `txlegenda` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `image_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `aluno_galeria`
--

INSERT INTO `aluno_galeria` (`id_foto`, `id_aluno`, `dtpublicacao`, `txlegenda`, `image_url`) VALUES
(7, 15, '28/10/2019 03:23', 'Isso', 'handler/uploads/Captura de Tela 2019-10-27 às 17.27.56.png'),
(8, 15, '09/12/2019 12:24', 'Que coisa mais fofa', 'handler/uploads/68564948_468194187240151_7626950968017420288_n.jpg'),
(9, 15, '15/12/2019 02:50', 'Isso', 'handler/uploads/61014530_139611297189427_6593647145872523264_o.jpg'),
(10, 15, '15/12/2019 03:02', 'Isso', 'handler/uploads/300px-Brazil_topo.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno_post`
--

CREATE TABLE `aluno_post` (
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `aluno_post`
--

INSERT INTO `aluno_post` (`id_post`, `id_aluno`, `txpost`, `nlike`, `ndeslike`) VALUES
(1, 16, 'Este projeto deve andar', 7, 1),
(3, 18, 'Edelson é demais! sz', 1, 0),
(4, 15, 'Mano, que felicidade que eu, to de que este projeto está dando certo.', 2, 0),
(6, 15, 'Mano, eu sou lindo demais.', 3, 0),
(7, 15, 'Para as últimas etapas do meu projeto, eu preciso criar o BDController, e simplesmente, implementar os seguintes arquivos: RoutesController.php para definir o webservice case switch, BDController.php para filtrar os seguintes parametros: id, webservice, e ainda importar os arquivos com os metodos por cada tabela, dentro da pasta gateway/bd/*.php', 0, 0),
(8, 15, 'Neste momento, devo continuar a produzir a parte da comunidade, que está bem cru, em seguida, será removido a opção de se criar comunidade por convocação.', 0, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `aluno_post_comentario`
--

CREATE TABLE `aluno_post_comentario` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `aluno_post_comentario`
--

INSERT INTO `aluno_post_comentario` (`id_comentario`, `id_post`, `id_aluno`, `txcomentario`) VALUES
(1, 1, 15, 'comentando'),
(2, 1, 15, 'comentando'),
(4, 1, 15, 'Com certeza');

-- --------------------------------------------------------

--
-- Estrutura para tabela `api_key`
--

CREATE TABLE `api_key` (
  `id` int(11) NOT NULL,
  `type` int(2) NOT NULL,
  `code` varchar(2048) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `api_key`
--

INSERT INTO `api_key` (`id`, `type`, `code`) VALUES
(1, 1, ' AIzaSyB7hWsWR2KJ4cxdUZif1ITHlu---U7lM-g ');

-- --------------------------------------------------------

--
-- Estrutura para tabela `avisos`
--

CREATE TABLE `avisos` (
  `id` int(11) NOT NULL,
  `idresponsavel` int(11) NOT NULL,
  `txpost` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `avisos`
--

INSERT INTO `avisos` (`id`, `idresponsavel`, `txpost`) VALUES
(1, 5, 'Teremos aula normal no dia dos professores.');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade`
--

CREATE TABLE `comunidade` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `txDescricao` varchar(180) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `tema` int(11) NOT NULL,
  `entrada` int(11) NOT NULL,
  `icon_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `cover_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade`
--

INSERT INTO `comunidade` (`id`, `nome`, `txDescricao`, `tema`, `entrada`, `icon_url`, `cover_url`) VALUES
(1, 'As Poc da Sofrência', '', 2, 3, '/css/user.png', ''),
(2, 'ETEC F.P.', 'Comunidade da Escola Técnica Fernando Prestes, um lugar maravilhoso e com muito pouco preconceito', 1, 2, '', '');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_denuncia`
--

CREATE TABLE `comunidade_denuncia` (
  `id_post` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `id_acusado` int(11) NOT NULL,
  `txdenuncia` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `comunidade_denuncia`
--

INSERT INTO `comunidade_denuncia` (`id_post`, `id_comunidade`, `id_aluno`, `id_acusado`, `txdenuncia`) VALUES
(1, 2, 15, 16, 'Eu amo essa merda');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_entrada`
--

CREATE TABLE `comunidade_entrada` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_entrada`
--

INSERT INTO `comunidade_entrada` (`id`, `nome`) VALUES
(1, 'por Convite'),
(2, 'por Convocação'),
(3, 'Aberta');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_galeria`
--

CREATE TABLE `comunidade_galeria` (
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `dtpublicacao` datetime NOT NULL,
  `txlegenda` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `photo_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_galeria`
--

INSERT INTO `comunidade_galeria` (`id_post`, `id_aluno`, `id_comunidade`, `dtpublicacao`, `txlegenda`, `photo_url`) VALUES
(1, 15, 2, '2019-12-10 00:00:00', 'SLA', '/uploads/1.png'),
(4, 15, 2, '2019-12-15 03:11:09', 'Bundão gostoso.', 'handler/uploads/61014530_139611297189427_6593647145872523264_o.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_inscrito`
--

CREATE TABLE `comunidade_inscrito` (
  `id_inscrito` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `is_Adm` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_inscrito`
--

INSERT INTO `comunidade_inscrito` (`id_inscrito`, `id_comunidade`, `id_aluno`, `is_Adm`) VALUES
(3, 2, 16, 0),
(8, 1, 15, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_post`
--

CREATE TABLE `comunidade_post` (
  `id_post` int(11) NOT NULL,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_post`
--

INSERT INTO `comunidade_post` (`id_post`, `id_comunidade`, `id_aluno`, `txpost`, `nlike`, `ndeslike`) VALUES
(1, 1, 16, 'Eu sou uma ótima escrava =)', 19, 2),
(5, 2, 15, 'Precisamos completar mais etapas do nosso projeto. Pois nesse momento ele está bem incompleto.', 1, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_post_comentario`
--

CREATE TABLE `comunidade_post_comentario` (
  `id_comentario` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_post_comentario`
--

INSERT INTO `comunidade_post_comentario` (`id_comentario`, `id_post`, `id_aluno`, `txcomentario`) VALUES
(1, 1, 15, 'Hello puta');

-- --------------------------------------------------------

--
-- Estrutura para tabela `comunidade_tema`
--

CREATE TABLE `comunidade_tema` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `comunidade_tema`
--

INSERT INTO `comunidade_tema` (`id`, `nome`) VALUES
(1, 'ETEC'),
(2, 'LGBT');

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `nome` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `sigla` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `curso`
--

INSERT INTO `curso` (`id`, `nome`, `sigla`) VALUES
(1, 'Informatica para Internet Integrado ao Ensino Médio', 'IPIIEM');

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso_sala`
--

CREATE TABLE `curso_sala` (
  `id` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `seq` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `curso_sala`
--

INSERT INTO `curso_sala` (`id`, `curso`, `seq`) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 1, 3);

-- --------------------------------------------------------

--
-- Estrutura para tabela `curso_sala_ano`
--

CREATE TABLE `curso_sala_ano` (
  `id` int(11) NOT NULL,
  `curso_sala` int(25) NOT NULL,
  `ano` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `curso_sala_ano`
--

INSERT INTO `curso_sala_ano` (`id`, `curso_sala`, `ano`) VALUES
(1, 1, 2018);

-- --------------------------------------------------------

--
-- Estrutura para tabela `direct`
--

CREATE TABLE `direct` (
  `id_mensagem` int(11) NOT NULL,
  `tp_lado_recebido` int(1) NOT NULL,
  `tp_lado_enviado` int(1) NOT NULL,
  `id_lado_recebido` int(11) NOT NULL,
  `id_lado_enviado` int(11) NOT NULL,
  `dt_envio` datetime NOT NULL,
  `dt_lido` datetime DEFAULT NULL,
  `tx_mensagem` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `evento`
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
-- Despejando dados para a tabela `evento`
--

INSERT INTO `evento` (`id_evento`, `no_evento`, `id_organizador`, `dt_evento`, `id_local`, `vl_ingresso`, `if_doacao`, `img_url`) VALUES
(1, 'Apresentação da escola', 1, '2019-03-31 19:00:00', 1, 0, 0, '/uploads/luminova.png');

-- --------------------------------------------------------

--
-- Estrutura para tabela `evento_avisos`
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
-- Estrutura para tabela `evento_convite`
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
-- Estrutura para tabela `evento_photo`
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
-- Estrutura para tabela `evento_pub_adm`
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
-- Estrutura para tabela `evento_pub_mem`
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
-- Estrutura para tabela `local`
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
-- Despejando dados para a tabela `local`
--

INSERT INTO `local` (`id_local`, `no_local`, `no_logradouro`, `nr_logradouro`, `no_bairro`, `no_cidade`, `nr_cep`) VALUES
(1, 'Escola Luminova - Unidade Sorocaba', 'Rua Ary Annunciato', 80, 'Jd. Maria Antonia Prado', 'Sorocaba', 18077080);

-- --------------------------------------------------------

--
-- Estrutura para tabela `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `idprofessor` int(11) NOT NULL,
  `txnotes` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `notes`
--

INSERT INTO `notes` (`id`, `idprofessor`, `txnotes`) VALUES
(2, 5, 'macOS num hardware non-Apple, não é proibido');

-- --------------------------------------------------------

--
-- Estrutura para tabela `organizador`
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
-- Despejando dados para a tabela `organizador`
--

INSERT INTO `organizador` (`id_organizador`, `no_organizador`, `dt_solicitacao`, `dt_validacao`, `st_validacacao`, `tx_email`, `tp_documento`, `nr_documento`, `tx_documento`) VALUES
(1, 'Escolas Luminova LTDA', '2019-03-01 00:00:00', '2019-03-01 10:00:00', 2, 'maria.morais@escolaluminova.com.br', 2, 183842129, '/uploads/rg-183842129.jpg');

-- --------------------------------------------------------

--
-- Estrutura para tabela `perseguicao`
--

CREATE TABLE `perseguicao` (
  `id_perseguicao` int(11) NOT NULL,
  `id_perseguido` int(11) NOT NULL,
  `id_perseguidor` int(11) NOT NULL,
  `tp_perseguido` int(11) NOT NULL,
  `tp_perseguidor` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `perseguicao`
--

INSERT INTO `perseguicao` (`id_perseguicao`, `id_perseguido`, `id_perseguidor`, `tp_perseguido`, `tp_perseguidor`) VALUES
(1, 15, 16, 0, 0),
(2, 15, 17, 0, 0),
(3, 0, 0, 0, 0),
(4, 1, 2, 15, 0),
(5, 1, 15, 2, 0);

-- --------------------------------------------------------

--
-- Estrutura para tabela `professores`
--

CREATE TABLE `professores` (
  `idprofessores` int(11) NOT NULL,
  `noprofessores` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `txmail_professores` varchar(100) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `pwsenha_professores` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `tximagem_professores` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Despejando dados para a tabela `professores`
--

INSERT INTO `professores` (`idprofessores`, `noprofessores`, `txmail_professores`, `pwsenha_professores`, `tximagem_professores`) VALUES
(5, 'Luis Flacido', 'luis.flacido@etec.sp.gov.br', '827ccb0eea8a706c4c34a16891f84e7b', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `professores_reunioes`
--

CREATE TABLE `professores_reunioes` (
  `id_reuniao` int(11) NOT NULL,
  `id_professor` int(11) NOT NULL,
  `title_reuniao` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date_reuniao` date NOT NULL,
  `txpost_reuniao` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_local` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas_produtos`
--

CREATE TABLE `vendas_produtos` (
  `id` int(11) NOT NULL,
  `id_publicacao` int(11) NOT NULL,
  `price` float NOT NULL,
  `image_url` varchar(1024) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `title` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `details` varchar(128) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `type` int(11) NOT NULL,
  `prpview` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas_reservas`
--

CREATE TABLE `vendas_reservas` (
  `id_produto` int(11) NOT NULL,
  `id_comprador` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `tp_venda` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura para tabela `vendas_vendedor`
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
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `access_tokens`
--
ALTER TABLE `access_tokens`
  ADD PRIMARY KEY (`id_access`);

--
-- Índices de tabela `agenda_eventos`
--
ALTER TABLE `agenda_eventos`
  ADD PRIMARY KEY (`id_evento`);

--
-- Índices de tabela `aluno`
--
ALTER TABLE `aluno`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ra` (`ra`),
  ADD KEY `curso` (`curso`),
  ADD KEY `ano` (`ano`);

--
-- Índices de tabela `aluno_galeria`
--
ALTER TABLE `aluno_galeria`
  ADD PRIMARY KEY (`id_foto`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices de tabela `aluno_post`
--
ALTER TABLE `aluno_post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices de tabela `aluno_post_comentario`
--
ALTER TABLE `aluno_post_comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_post` (`id_post`);

--
-- Índices de tabela `api_key`
--
ALTER TABLE `api_key`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `avisos`
--
ALTER TABLE `avisos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `comunidade`
--
ALTER TABLE `comunidade`
  ADD PRIMARY KEY (`id`),
  ADD KEY `entrada` (`entrada`),
  ADD KEY `tema` (`tema`);

--
-- Índices de tabela `comunidade_denuncia`
--
ALTER TABLE `comunidade_denuncia`
  ADD PRIMARY KEY (`id_post`);

--
-- Índices de tabela `comunidade_entrada`
--
ALTER TABLE `comunidade_entrada`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `comunidade_galeria`
--
ALTER TABLE `comunidade_galeria`
  ADD PRIMARY KEY (`id_post`);

--
-- Índices de tabela `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  ADD PRIMARY KEY (`id_inscrito`),
  ADD KEY `id_comunidade` (`id_comunidade`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices de tabela `comunidade_post`
--
ALTER TABLE `comunidade_post`
  ADD PRIMARY KEY (`id_post`),
  ADD KEY `id_comunidade` (`id_comunidade`),
  ADD KEY `id_aluno` (`id_aluno`);

--
-- Índices de tabela `comunidade_post_comentario`
--
ALTER TABLE `comunidade_post_comentario`
  ADD PRIMARY KEY (`id_comentario`),
  ADD KEY `id_aluno` (`id_aluno`),
  ADD KEY `id_post` (`id_post`);

--
-- Índices de tabela `comunidade_tema`
--
ALTER TABLE `comunidade_tema`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `curso_sala`
--
ALTER TABLE `curso_sala`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso` (`curso`);

--
-- Índices de tabela `curso_sala_ano`
--
ALTER TABLE `curso_sala_ano`
  ADD PRIMARY KEY (`id`),
  ADD KEY `curso_sala` (`curso_sala`);

--
-- Índices de tabela `direct`
--
ALTER TABLE `direct`
  ADD PRIMARY KEY (`id_mensagem`);

--
-- Índices de tabela `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`),
  ADD KEY `id_local` (`id_local`);

--
-- Índices de tabela `evento_avisos`
--
ALTER TABLE `evento_avisos`
  ADD PRIMARY KEY (`id_aviso`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`);

--
-- Índices de tabela `evento_convite`
--
ALTER TABLE `evento_convite`
  ADD PRIMARY KEY (`id_convite`),
  ADD KEY `id_evento` (`id_evento`),
  ADD KEY `id_organizador` (`id_organizador`);

--
-- Índices de tabela `evento_photo`
--
ALTER TABLE `evento_photo`
  ADD PRIMARY KEY (`id_photo`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices de tabela `evento_pub_adm`
--
ALTER TABLE `evento_pub_adm`
  ADD PRIMARY KEY (`id_pub`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices de tabela `evento_pub_mem`
--
ALTER TABLE `evento_pub_mem`
  ADD PRIMARY KEY (`id_pub`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Índices de tabela `local`
--
ALTER TABLE `local`
  ADD PRIMARY KEY (`id_local`);

--
-- Índices de tabela `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `organizador`
--
ALTER TABLE `organizador`
  ADD PRIMARY KEY (`id_organizador`);

--
-- Índices de tabela `perseguicao`
--
ALTER TABLE `perseguicao`
  ADD PRIMARY KEY (`id_perseguicao`);

--
-- Índices de tabela `professores`
--
ALTER TABLE `professores`
  ADD PRIMARY KEY (`idprofessores`);

--
-- Índices de tabela `professores_reunioes`
--
ALTER TABLE `professores_reunioes`
  ADD PRIMARY KEY (`id_reuniao`);

--
-- Índices de tabela `vendas_produtos`
--
ALTER TABLE `vendas_produtos`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `vendas_reservas`
--
ALTER TABLE `vendas_reservas`
  ADD PRIMARY KEY (`id_produto`);

--
-- Índices de tabela `vendas_vendedor`
--
ALTER TABLE `vendas_vendedor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas apagadas
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
  MODIFY `id_foto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `aluno_post`
--
ALTER TABLE `aluno_post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
-- AUTO_INCREMENT de tabela `avisos`
--
ALTER TABLE `avisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `comunidade`
--
ALTER TABLE `comunidade`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `comunidade_denuncia`
--
ALTER TABLE `comunidade_denuncia`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `comunidade_entrada`
--
ALTER TABLE `comunidade_entrada`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `comunidade_galeria`
--
ALTER TABLE `comunidade_galeria`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  MODIFY `id_inscrito` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `comunidade_post`
--
ALTER TABLE `comunidade_post`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
-- AUTO_INCREMENT de tabela `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

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
  MODIFY `id_reuniao` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `aluno`
--
ALTER TABLE `aluno`
  ADD CONSTRAINT `aluno_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `curso` (`id`);

--
-- Restrições para tabelas `aluno_galeria`
--
ALTER TABLE `aluno_galeria`
  ADD CONSTRAINT `aluno_galeria_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Restrições para tabelas `aluno_post`
--
ALTER TABLE `aluno_post`
  ADD CONSTRAINT `aluno_post_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Restrições para tabelas `aluno_post_comentario`
--
ALTER TABLE `aluno_post_comentario`
  ADD CONSTRAINT `aluno_post_comentario_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `aluno_post_comentario_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `aluno_post` (`id_post`);

--
-- Restrições para tabelas `comunidade`
--
ALTER TABLE `comunidade`
  ADD CONSTRAINT `comunidade_ibfk_1` FOREIGN KEY (`entrada`) REFERENCES `comunidade_entrada` (`id`),
  ADD CONSTRAINT `comunidade_ibfk_2` FOREIGN KEY (`tema`) REFERENCES `comunidade_tema` (`id`);

--
-- Restrições para tabelas `comunidade_inscrito`
--
ALTER TABLE `comunidade_inscrito`
  ADD CONSTRAINT `comunidade_inscrito_ibfk_1` FOREIGN KEY (`id_comunidade`) REFERENCES `comunidade` (`id`),
  ADD CONSTRAINT `comunidade_inscrito_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Restrições para tabelas `comunidade_post`
--
ALTER TABLE `comunidade_post`
  ADD CONSTRAINT `comunidade_post_ibfk_1` FOREIGN KEY (`id_comunidade`) REFERENCES `comunidade` (`id`),
  ADD CONSTRAINT `comunidade_post_ibfk_2` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`);

--
-- Restrições para tabelas `comunidade_post_comentario`
--
ALTER TABLE `comunidade_post_comentario`
  ADD CONSTRAINT `comunidade_post_comentario_ibfk_1` FOREIGN KEY (`id_aluno`) REFERENCES `aluno` (`id`),
  ADD CONSTRAINT `comunidade_post_comentario_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `comunidade_post` (`id_post`);

--
-- Restrições para tabelas `curso_sala`
--
ALTER TABLE `curso_sala`
  ADD CONSTRAINT `curso_sala_ibfk_1` FOREIGN KEY (`curso`) REFERENCES `curso` (`id`);

--
-- Restrições para tabelas `curso_sala_ano`
--
ALTER TABLE `curso_sala_ano`
  ADD CONSTRAINT `curso_sala_ano_ibfk_1` FOREIGN KEY (`curso_sala`) REFERENCES `curso_sala` (`id`);

--
-- Restrições para tabelas `evento`
--
ALTER TABLE `evento`
  ADD CONSTRAINT `evento_ibfk_1` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`),
  ADD CONSTRAINT `evento_ibfk_2` FOREIGN KEY (`id_local`) REFERENCES `local` (`id_local`);

--
-- Restrições para tabelas `evento_avisos`
--
ALTER TABLE `evento_avisos`
  ADD CONSTRAINT `evento_avisos_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`),
  ADD CONSTRAINT `evento_avisos_ibfk_2` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`);

--
-- Restrições para tabelas `evento_convite`
--
ALTER TABLE `evento_convite`
  ADD CONSTRAINT `evento_convite_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`),
  ADD CONSTRAINT `evento_convite_ibfk_2` FOREIGN KEY (`id_organizador`) REFERENCES `organizador` (`id_organizador`);

--
-- Restrições para tabelas `evento_photo`
--
ALTER TABLE `evento_photo`
  ADD CONSTRAINT `evento_photo_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`);

--
-- Restrições para tabelas `evento_pub_adm`
--
ALTER TABLE `evento_pub_adm`
  ADD CONSTRAINT `evento_pub_adm_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id_evento`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
