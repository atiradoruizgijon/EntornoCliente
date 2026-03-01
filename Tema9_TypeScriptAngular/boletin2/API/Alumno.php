<?php
include_once "BoletinDB.php";

/**
 * Esta clase es una copia/plantilla de los ejercicios
 * de PHP, por eso hay métodos que no usaré aunque estén hechos.
 */
class Alumno
{
    private $id;
    private $nombre;
    private $mail;
    private $curso;
    private $repetidor;
    private $observaciones;

    public function __construct($id = "", $nombre = "", $mail = "", $curso = "", $repetidor = "", $observaciones = "")
    {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->mail = $mail;
        $this->curso = $curso;
        $this->repetidor = $repetidor;
        $this->observaciones = $observaciones;
    }

    public function insert()
    {
        $conexion = BoletinDB::connectDB();
        $conexion->exec("INSERT INTO alumnos(nombre, mail, curso, repetidor, observaciones) 
            VALUES ('$this->nombre', '$this->mail', '$this->curso', '$this->repetidor', '$this->observaciones')");

        $conexion = null;
    }

    public function update()
    {
        $conexion = BoletinDB::connectDB();
        $conexion->exec("UPDATE alumnos SET nombre='$this->nombre', mail='$this->mail', curso='$this->curso',
            repetidor='$this->repetidor', observaciones='$this->observaciones' WHERE id=$this->id");

        $conexion = null;
    }

    public function delete()
    {
        $conexion = BoletinDB::connectDB();
        $conexion->exec("DELETE FROM alumnos WHERE id=$this->id");

        $conexion = null;
    }

    public static function getAlumnos()
    {
        $conexion = BoletinDB::connectDB();
        $consulta = $conexion->query("SELECT * FROM alumnos");
        $alumnos = $consulta->fetchAll(PDO::FETCH_ASSOC);
        return $alumnos;
    }

    public static function getAlumnoById($id)
    {
        $conexion = BoletinDB::connectDB();

        $seleccion = "SELECT * FROM alumnos WHERE id='$id'";
        $consulta = $conexion->query($seleccion);


        if ($consulta->rowCount() > 0) {
            $registro = $consulta->fetchObject();
            $alumno = new Alumno(
                $registro->id,
                $registro->nombre,
                $registro->mail,
                $registro->curso,
                $registro->repetidor,
                $registro->observaciones
            );
            $conexion = null;

            return $alumno;
        } else {
            $conexion = null;
            return false;
        }
    }
}
