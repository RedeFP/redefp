-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 09-Ago-2019 às 00:56
-- Versão do servidor: 5.7.27-0ubuntu0.19.04.1
-- versão do PHP: 7.2.19-0ubuntu0.19.04.1

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
CREATE DATABASE IF NOT EXISTS `id6136795_redefp` DEFAULT CHARACTER SET utf8 COLLATE utf8_bin;
USE `id6136795_redefp`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `access_tokens`
--

CREATE TABLE IF NOT EXISTS `access_tokens` (
  `id_access` int(11) NOT NULL AUTO_INCREMENT,
  `access_token` varchar(32) COLLATE utf8_bin NOT NULL,
  `id_aluno` int(11) NOT NULL,
  PRIMARY KEY (`id_access`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda_eventos`
--

CREATE TABLE IF NOT EXISTS `agenda_eventos` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `dt_inicio` datetime NOT NULL,
  `dt_fim` datetime NOT NULL,
  `id_local` int(11) NOT NULL,
  PRIMARY KEY (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `agenda_local`
--

CREATE TABLE IF NOT EXISTS `agenda_local` (
  `id_local` int(11) NOT NULL,
  `geocode_placeid` int(11) NOT NULL,
  `nr_lat` int(11) NOT NULL,
  `nr_lgt` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno`
--

CREATE TABLE IF NOT EXISTS `aluno` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ra` int(11) NOT NULL,
  `curso` int(11) NOT NULL,
  `ano` int(11) NOT NULL,
  `nome` varchar(256) COLLATE utf8_bin NOT NULL,
  `apelido` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(128) COLLATE utf8_bin NOT NULL,
  `institucional` varchar(180) COLLATE utf8_bin NOT NULL,
  `telefone` varchar(13) COLLATE utf8_bin NOT NULL,
  `senha` varchar(32) COLLATE utf8_bin NOT NULL,
  `profile_pic_url` varchar(2048) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ra` (`ra`),
  KEY `curso` (`curso`),
  KEY `ano` (`ano`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_galeria`
--

CREATE TABLE IF NOT EXISTS `aluno_galeria` (
  `id_foto` int(11) NOT NULL AUTO_INCREMENT,
  `id_aluno` int(11) NOT NULL,
  `dtpublicacao` datetime NOT NULL,
  `txlegenda` varchar(1024) COLLATE utf8_bin NOT NULL,
  `image_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_foto`),
  KEY `id_aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_post`
--

CREATE TABLE IF NOT EXISTS `aluno_post` (
  `id_post` int(11) NOT NULL AUTO_INCREMENT,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL,
  PRIMARY KEY (`id_post`),
  KEY `id_aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `aluno_post_comentario`
--

CREATE TABLE IF NOT EXISTS `aluno_post_comentario` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_comentario`),
  KEY `id_aluno` (`id_aluno`),
  KEY `id_post` (`id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `api_key`
--

CREATE TABLE IF NOT EXISTS `api_key` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(2) NOT NULL,
  `code` varchar(2048) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `avisos`
--

CREATE TABLE IF NOT EXISTS `avisos` (
  `idaviso` int(11) NOT NULL AUTO_INCREMENT,
  `idresponsavel` int(11) NOT NULL,
  `txpost` varchar(150) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`idaviso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade`
--

CREATE TABLE IF NOT EXISTS `comunidade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL,
  `tema` int(11) NOT NULL,
  `entrada` int(11) NOT NULL,
  `icon_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  `cover_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  KEY `entrada` (`entrada`),
  KEY `tema` (`tema`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_entrada`
--

CREATE TABLE IF NOT EXISTS `comunidade_entrada` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_galeria`
--

CREATE TABLE IF NOT EXISTS `comunidade_galeria` (
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

CREATE TABLE IF NOT EXISTS `comunidade_inscrito` (
  `id_inscrito` int(11) NOT NULL AUTO_INCREMENT,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  PRIMARY KEY (`id_inscrito`),
  KEY `id_comunidade` (`id_comunidade`),
  KEY `id_aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_post`
--

CREATE TABLE IF NOT EXISTS `comunidade_post` (
  `id_post` int(11) NOT NULL AUTO_INCREMENT,
  `id_comunidade` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txpost` varchar(1024) COLLATE utf8_bin NOT NULL,
  `nlike` int(11) NOT NULL,
  `ndeslike` int(11) NOT NULL,
  PRIMARY KEY (`id_post`),
  KEY `id_comunidade` (`id_comunidade`),
  KEY `id_aluno` (`id_aluno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_post_comentario`
--

CREATE TABLE IF NOT EXISTS `comunidade_post_comentario` (
  `id_comentario` int(11) NOT NULL AUTO_INCREMENT,
  `id_post` int(11) NOT NULL,
  `id_aluno` int(11) NOT NULL,
  `txcomentario` varchar(1024) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id_comentario`),
  KEY `id_aluno` (`id_aluno`),
  KEY `id_post` (`id_post`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `comunidade_tema`
--

CREATE TABLE IF NOT EXISTS `comunidade_tema` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso`
--

CREATE TABLE IF NOT EXISTS `curso` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(128) COLLATE utf8_bin NOT NULL,
  `sigla` varchar(10) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso_sala`
--

CREATE TABLE IF NOT EXISTS `curso_sala` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curso` int(11) NOT NULL,
  `seq` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `curso` (`curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `curso_sala_ano`
--

CREATE TABLE IF NOT EXISTS `curso_sala_ano` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `curso_sala` int(25) NOT NULL,
  `ano` int(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `curso_sala` (`curso_sala`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `direct`
--

CREATE TABLE IF NOT EXISTS `direct` (
  `id_mensagem` int(11) NOT NULL AUTO_INCREMENT,
  `tp_lado_recebido` int(1) NOT NULL,
  `tp_lado_enviado` int(1) NOT NULL,
  `id_lado_recebido` int(11) NOT NULL,
  `id_lado_enviado` int(11) NOT NULL,
  `dt_envio` datetime NOT NULL,
  `dt_lido` datetime DEFAULT NULL,
  `tx_mensagem` varchar(256) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id_mensagem`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento`
--

CREATE TABLE IF NOT EXISTS `evento` (
  `id_evento` int(11) NOT NULL AUTO_INCREMENT,
  `no_evento` varchar(120) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `dt_evento` datetime NOT NULL,
  `id_local` int(11) NOT NULL,
  `vl_ingresso` int(11) NOT NULL,
  `if_doacao` int(11) NOT NULL,
  `img_url` varchar(1024) NOT NULL,
  PRIMARY KEY (`id_evento`),
  KEY `id_organizador` (`id_organizador`),
  KEY `id_local` (`id_local`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_avisos`
--

CREATE TABLE IF NOT EXISTS `evento_avisos` (
  `id_aviso` int(11) NOT NULL AUTO_INCREMENT,
  `id_evento` int(11) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `tx_post` int(11) NOT NULL,
  `dt_post` int(11) NOT NULL,
  PRIMARY KEY (`id_aviso`),
  KEY `id_evento` (`id_evento`),
  KEY `id_organizador` (`id_organizador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_convite`
--

CREATE TABLE IF NOT EXISTS `evento_convite` (
  `id_convite` int(11) NOT NULL AUTO_INCREMENT,
  `id_evento` int(11) NOT NULL,
  `id_convidado` int(11) NOT NULL,
  `tp_convidado` int(11) NOT NULL,
  `dt_compra` datetime NOT NULL,
  `id_venda` int(11) NOT NULL,
  `id_organizador` int(11) NOT NULL,
  `dt_confirma` datetime NOT NULL,
  PRIMARY KEY (`id_convite`),
  KEY `id_evento` (`id_evento`),
  KEY `id_organizador` (`id_organizador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_photo`
--

CREATE TABLE IF NOT EXISTS `evento_photo` (
  `id_photo` int(11) NOT NULL AUTO_INCREMENT,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_photo` varchar(2048) NOT NULL,
  `tx_legenda` varchar(120) NOT NULL,
  PRIMARY KEY (`id_photo`),
  KEY `id_evento` (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_pub_adm`
--

CREATE TABLE IF NOT EXISTS `evento_pub_adm` (
  `id_pub` int(11) NOT NULL AUTO_INCREMENT,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_post` varchar(180) NOT NULL,
  `nr_like` int(5) NOT NULL,
  `nr_deslike` int(5) NOT NULL,
  PRIMARY KEY (`id_pub`),
  KEY `id_evento` (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `evento_pub_mem`
--

CREATE TABLE IF NOT EXISTS `evento_pub_mem` (
  `id_pub` int(11) NOT NULL AUTO_INCREMENT,
  `id_evento` int(11) NOT NULL,
  `id_responsavel` int(11) NOT NULL,
  `tp_responsavel` int(1) NOT NULL,
  `tx_post` varchar(180) NOT NULL,
  `nr_like` int(5) NOT NULL,
  `nr_deslike` int(5) NOT NULL,
  PRIMARY KEY (`id_pub`),
  KEY `id_evento` (`id_evento`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `local`
--

CREATE TABLE IF NOT EXISTS `local` (
  `id_local` int(11) NOT NULL AUTO_INCREMENT,
  `no_local` varchar(120) NOT NULL,
  `no_logradouro` varchar(120) NOT NULL,
  `nr_logradouro` int(7) NOT NULL,
  `no_bairro` varchar(120) NOT NULL,
  `no_cidade` varchar(50) NOT NULL,
  `nr_cep` int(8) NOT NULL,
  PRIMARY KEY (`id_local`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `notes`
--

CREATE TABLE IF NOT EXISTS `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `txnotes` varchar(1000) COLLATE utf8_bin NOT NULL,
  `idprofessor` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `organizador`
--

CREATE TABLE IF NOT EXISTS `organizador` (
  `id_organizador` int(11) NOT NULL AUTO_INCREMENT,
  `no_organizador` varchar(130) NOT NULL,
  `dt_solicitacao` datetime NOT NULL,
  `dt_validacao` datetime NOT NULL,
  `st_validacacao` int(1) NOT NULL,
  `tx_email` varchar(130) NOT NULL,
  `tp_documento` int(1) NOT NULL,
  `nr_documento` int(20) NOT NULL,
  `tx_documento` varchar(1024) NOT NULL,
  PRIMARY KEY (`id_organizador`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `perseguicao`
--

CREATE TABLE IF NOT EXISTS `perseguicao` (
  `id_perseguicao` int(11) NOT NULL AUTO_INCREMENT,
  `id_perseguido` int(11) NOT NULL,
  `id_perseguidor` int(11) NOT NULL,
  `tp_perseguido` int(11) NOT NULL,
  `tp_perseguidor` int(11) NOT NULL,
  PRIMARY KEY (`id_perseguicao`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `professores`
--

CREATE TABLE IF NOT EXISTS `professores` (
  `idprofessores` int(11) NOT NULL AUTO_INCREMENT,
  `noprofessores` varchar(50) COLLATE utf8_bin NOT NULL,
  `txmail_professores` varchar(100) COLLATE utf8_bin NOT NULL,
  `pwsenha_professores` varchar(32) COLLATE utf8_bin NOT NULL,
  `tximagem_professores` varchar(1024) COLLATE utf8_bin DEFAULT NULL,
  `cargo` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `biologia` varchar(1000) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`idprofessores`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_produtos`
--

CREATE TABLE IF NOT EXISTS `vendas_produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_publicacao` int(11) NOT NULL,
  `price` float NOT NULL,
  `image_url` varchar(1024) COLLATE utf8_bin NOT NULL,
  `title` varchar(128) COLLATE utf8_bin NOT NULL,
  `details` varchar(128) COLLATE utf8_bin NOT NULL,
  `type` int(11) NOT NULL,
  `prpview` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_reservas`
--

CREATE TABLE IF NOT EXISTS `vendas_reservas` (
  `id_produto` int(11) NOT NULL AUTO_INCREMENT,
  `id_comprador` int(11) NOT NULL,
  `id_vendedor` int(11) NOT NULL,
  `tp_venda` int(1) NOT NULL,
  PRIMARY KEY (`id_produto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Estrutura da tabela `vendas_vendedor`
--

CREATE TABLE IF NOT EXISTS `vendas_vendedor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(1) NOT NULL,
  `id_interna` int(11) NOT NULL,
  `nr_cpf` int(11) NOT NULL,
  `aprovacao_status` int(1) NOT NULL,
  `dt_aprovacao` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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
