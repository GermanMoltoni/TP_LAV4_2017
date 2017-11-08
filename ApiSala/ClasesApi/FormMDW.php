<?php
require_once './Clases/Jugador.php';
class FormMDW{
public static function FormJugador($request, $response, $next){
        $data = $request->getParsedBody();
        if(!isset($data['mail'],$data['sexo'],$data['usuario'],$data['password']))
            return $response->withJson(array('msg'=>'Faltan Datos'),201);
        $jugador_data=array();
        $jugador_data['mail'] = filter_var($data['mail'], FILTER_SANITIZE_STRING);
        $jugador_data['sexo'] = filter_var($data['sexo'], FILTER_SANITIZE_STRING);
        $jugador_data['usuario'] = filter_var($data['usuario'], FILTER_SANITIZE_STRING);
        $jugador_data['password'] = filter_var($data['password'], FILTER_SANITIZE_STRING);
        return $next($request->withAttribute('jugador',$jugador_data), $response);
}
public static function ModifFormJugador($request, $response, $next){
        $data = $request->getParsedBody();
        if(!isset($data['id'],$data['mail'],$data['sexo'],$data['usuario'],$data['password']))
            return $response->withJson(array('msg'=>'Faltan Datos'),201);
        $jugador_data=array();
        $jugador_data['id'] = filter_var($data['id'], FILTER_SANITIZE_STRING);
        $jugador_data['mail'] = filter_var($data['mail'], FILTER_SANITIZE_STRING);
        $jugador_data['sexo'] = filter_var($data['sexo'], FILTER_SANITIZE_STRING);
        $jugador_data['usuario'] = filter_var($data['usuario'], FILTER_SANITIZE_STRING);
        $jugador_data['password'] = filter_var($data['password'], FILTER_SANITIZE_STRING);
        return $next($request->withAttribute('jugador',$jugador_data), $response);
}

public static function FormLogin($request, $response, $next){
        $data = $request->getParsedBody();
        if(!isset($data['usuario'],$data['password']))
            return $response->withJson(array('msg'=>'Faltan Datos'),201);
        $jugador_data=array();
        $jugador_data['usuario'] = filter_var($data['usuario'], FILTER_SANITIZE_STRING);
        $jugador_data['password'] = filter_var($data['password'], FILTER_SANITIZE_STRING);
        return $next($request->withAttribute('jugador',$jugador_data), $response);
}
public static function GetParamId($request, $response, $next){
        if(($id = $request->getParam('id')) != null)
            return $next($request->withAttribute('id',filter_var($id, FILTER_SANITIZE_STRING)), $response);
        return $next($request, $response);
}
public static function GetId($request, $response, $next){
        if(($id = $request->getParam('id')) != null)
            return $next($request->withAttribute('id',$id), $response);
        return $response->withJson(array('msg'=>'Faltan Datos'),201);
}

}
?>