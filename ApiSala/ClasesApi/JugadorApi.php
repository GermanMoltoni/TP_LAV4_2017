<?php
require_once './Clases/Jugador.php';
require './vendor/autoload.php';
class JugadorApi extends Jugador{
    public static function ListarApi($request, $response, $args){
        if(($id = $request->getAttribute('id')) != null){
            if(($jugador = parent::GetUsuarioPorId($id)) != false)
                return $response->withJson($jugador,200);
            else
                return $response->withJson(array('msg'=>'No existe el jugador'),201);
        }
        if(($lista = parent::Listar()) != false)   
            return $response->withJson($lista,200);
        return $response->withJson(array('msg'=>'No hay jugadores Cargados'),201);
    }
 
    public static function AltaApi($request, $response, $args) {

        $jugador_data = $request->getAttribute('jugador');
        $jugador = new Jugador($jugador_data['mail'],$jugador_data['password'],$jugador_data['sexo'],$jugador_data['usuario']);
        if($jugador->Alta())
            return $response->withJson(array('msg'=>'Creado Correctamente'),200);
        return $response->withJson(array('msg'=>'No se pudo crear el usuario'),201);
        
    }
    public static function ModificarApi($request, $response, $args){
        $jugador_data = $request->getAttribute('user');
        $jugador = new Usuario($jugador_data['mail'],$jugador_data['nombre'],$jugador_data['sexo'],$jugador_data['password'],$jugador_data['usuario'],$jugador_data['id']);
        if($jugador->Modificar())
            return $response->withJson(array('msg'=>'Modificado Correctamente'),200);
        return $response->withJson(array('msg'=>'No se pudo crear el usuario'),201);
        
    }
    public static function BajaApi($request, $response, $args){
        $id = $request->getAttribute('id'); 
        if(parent::Baja($id))
            return $response->withJson(array('msg'=>'Borrado Correctamente'),200);
        return $response->withJson(array('msg'=>'No existe el usuario'),201);
        
    }
    
}
?>