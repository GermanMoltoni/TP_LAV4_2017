<?php
require_once './Clases/Jugador.php';
require_once './Clases/AuthJWT.php';

class LoginApi{
    static function LoginJugadorApi($request, $response, $args)
    {
        $datos = $request->getAttribute('jugador');
        if(($jugador = Jugador::GetByUsuario($datos['usuario'])) != false)
        {
            if($jugador->password == md5($datos['password']) && $jugador->habilitado == 1){
                $jugador = Jugador::GetUsuarioPorId($jugador->id);
                $token = AuthJWT::CrearToken($jugador);
                return $response->withJson(array('jugador'=>$jugador,'token'=>$token),200);
            }   
        }
        return $response->withJson(array('msg'=>'No se pudo iniciar sesion'),201);
    }
}


?>