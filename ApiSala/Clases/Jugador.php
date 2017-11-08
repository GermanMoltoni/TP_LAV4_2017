<?php
    require_once "./Clases/AccesoDatos.php";
    class Jugador
    {
        public $id;
        public $mail;
        public $sexo;
        public $password;
        public $usuario;
        public $habilitado;
        public function __construct($mail=NULL,$password=NULL,$sexo=NULL,$usuario=NULL,$id=NULL,$habilitado=NULL){
            if($mail !== NULL && $sexo !==NULL && $password !==NULL  && $usuario !==NULL){
                $this->sexo = $sexo;
                $this->password = $password;
                $this->id = $id;
                $this->mail = $mail;
                $this->usuario = $usuario;
                $this->habilitado = $habilitado;
             }
        }
        function Alta(){
            if (self::GetByUsuario($this->usuario) == false)
            {
                $objDB = AccesoDatos::DameUnObjetoAcceso();
		        $consulta = $objDB->RetornarConsulta("INSERT INTO `jugadores`(`mail`, `sexo`,`password`, `habilitado`,`usuario`) VALUES (:mail, :sexo, :password, :habilitado,:usuario)");
                $consulta->bindValue(':sexo',$this->sexo, PDO::PARAM_STR);
                $consulta->bindValue(':password',md5($this->password), PDO::PARAM_STR);
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':habilitado',true, PDO::PARAM_STR);
                $consulta->bindValue(':usuario',$this->usuario, PDO::PARAM_STR);
                return $consulta->execute();  
            }
            return false;
        }
        static function CambiarEstado($id)
        {
            if (($user = self::GetUsuarioPorId($id)) != false)
            {
                $objDB = AccesoDatos::DameUnObjetoAcceso(); 
                $consulta = $objDB->RetornarConsulta("UPDATE `jugadores` SET `habilitado` = :habilitado WHERE `id` = :id");
		        $consulta->bindValue(':id',$id, PDO::PARAM_INT);
                $consulta->bindValue(':habilitado',!$user->habilitado, PDO::PARAM_STR);
                $consulta->execute();
                return true;
            }
            return false;
        }
        static function Baja($id)
        {
            if (($user = self::GetUsuarioPorId($id)) != false)
            {
                $objDB = AccesoDatos::DameUnObjetoAcceso(); 
                $consulta = $objDB->RetornarConsulta("UPDATE `jugadores` SET `habilitado` = :habilitado WHERE `id` = :Id");
		        $consulta->bindValue(':Id',$id, PDO::PARAM_INT);
                $consulta->bindValue(':habilitado',false, PDO::PARAM_STR);
                $consulta->execute();
                return true;
            }
            return false;
        }
        static function Listar(){
            $objDB = AccesoDatos::DameUnObjetoAcceso();
		    $consulta = $objDB->RetornarConsulta("SELECT mail,sexo,usuario,id,habilitado FROM jugadores");
            $consulta->execute();
            $retorno = $consulta->fetchAll(PDO::FETCH_OBJ);
            if(count($retorno) == 0)
                return false;
            return $retorno;
        }
        static function GetUsuarioPorId($id)
        {
            $objDB = AccesoDatos::DameUnObjetoAcceso();
		    $consulta = $objDB->RetornarConsulta("SELECT mail,sexo,usuario,id,habilitado FROM jugadores WHERE id = :id ");
		    $consulta->bindValue(':id',$id, PDO::PARAM_INT);
            $consulta->execute();
            $retorno = $consulta->fetchAll(PDO::FETCH_OBJ);
            if(count($retorno) == 0)
                return false;
            return $retorno[0];
        }
        static function GetByUsuario($usuario){
            $objDB = AccesoDatos::DameUnObjetoAcceso();
		    $consulta = $objDB->RetornarConsulta("SELECT mail,sexo,password,usuario,id,habilitado FROM jugadores WHERE usuario=:usuario");
		    $consulta->bindValue(':usuario',$usuario, PDO::PARAM_STR);
            $consulta->execute();
            $retorno = $consulta->fetchAll(PDO::FETCH_CLASS,"jugador");
            if(count($retorno) == 0)
                return false;
            return $retorno[0];
        }
         function Modificar(){
            if (($user = self::GetUsuarioPorId($this->id)) != false)
            {
                $objDB = AccesoDatos::DameUnObjetoAcceso();
                $consulta = $objDB->RetornarConsulta("UPDATE `jugadores` SET `mail`=:mail,`sexo`=:sexo,`password`=:password,`usuario`=:usuario WHERE id=:id");
                $consulta->bindValue(':sexo',$this->sexo, PDO::PARAM_STR);
                $consulta->bindValue(':password',$this->password, PDO::PARAM_STR);
                $consulta->bindValue(':mail',$this->mail, PDO::PARAM_STR);
                $consulta->bindValue(':usuario',$this->usuario, PDO::PARAM_STR);
                $consulta->bindValue(':id',$this->id, PDO::PARAM_INT);
                return $consulta->execute();
            }
            return false;
        }
    }
?>