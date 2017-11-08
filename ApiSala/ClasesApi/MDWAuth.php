<?php
require_once './Clases/Jugador.php';
require_once './Clases/AuthJWT.php';
class AuthMDW{
    public static function VerificarJugador($request, $response, $next){
        try{ 
            if(($token = $request->getHeader('token')) != null)
            {
                $token = $token[0];
                    AuthJWT::CheckToken($token);
                    $data = AuthJWT::GetData($token);
                    if(($jugador = Jugador::GetByUsuario($data->jugador)) != false && $jugador->habilitado == 1) 
                        return $next($request->withAttribute('jugador',$data),$response);
                    return  $response->withJson(array('msg'=>"Usuario No habilitado"),201);   
            }
            throw new Exception();
        }
        catch(Exception $e)
        {   
            return  $response->withJson(array('error'=>"Se requiere iniciar Sesion"));   
        }
    }
    

}

?>