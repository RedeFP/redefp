<?php

class Route{
    function callRoute($route) {
        require BD_Token;
        if($_GET['debug'] == 1) {
            echo "Line:".$route;
        }
        switch($route) {
            case "access_tokens->insert":
                $req = new AccessTokens();
                $req->insert($bd);
            break;
            case "access_tokens->find":
                $req = new Errors();
                $req->Forbidden();
            break;
            case "access_tokens->findAll":
                $req = new Errors();
                $req->Forbidden();
            break;
            case "access_tokens->update":
                $req = new AccessTokens();
                $req->update($bd);
            break;
            case "access_tokens->delete":
                $req = new AccessTokens();
                $req->Forbidden();
            break;
            case "agenda_eventos->insert":
                $req = new AgendaEventos();
                $req->insert();
            break;
            case "agenda_eventos->find":
                $req = new AgendaEventos();
                $req->find();
            break;
            default:
                $req = new Errors();
                $req->NotFound();                
            break;
        }
    }
}