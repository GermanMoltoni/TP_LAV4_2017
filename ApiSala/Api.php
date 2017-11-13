<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
require "./ClasesApi/JugadorApi.php";
require_once "./ClasesApi/MDWAuth.php";
require_once "./ClasesApi/LoginApi.php";
require_once "./ClasesApi/FormMDW.php";
$config['displayErrorDetails'] = true;
 
require './vendor/autoload.php';
    
$app = new \Slim\App(["settings" => $config]);
$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', 'https://germanmoltoni.github.io')
            ->withHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
});
$app->group('/jugador', function () {
    $this->post('', \JugadorApi::class .':AltaApi')->add(\FormMDW::class.':FormJugador');
    $this->post('/', \JugadorApi::class .':ModificarApi')->add(\FormMDW::class.':ModifFormJugador');
    $this->get('',\JugadorApi::class . ':ListarApi')->add(\FormMDW::class.':GetParamId');
    $this->delete('', \JugadorApi::class .':BajaApi')->add(\FormMDW::class.':GetId');
})->add(\AuthMDW::class.':VerificarJugador'); 
$app->post('/registro', \JugadorApi::class .':AltaApi')->add(\FormMDW::class.':FormJugador');

$app->post('/login',\LoginApi::class.':LoginJugadorApi')->add(\FormMDW::class.':FormLogin');

$app->run();
?>