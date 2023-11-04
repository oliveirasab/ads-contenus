class Moradia {
    public area: number
    public endereco: string
}
// herança entre casa e moradia
class Casa extends Moradia {
    /* composição: casa e telhado*/
    telhadoAreaInterna: Telhado
    telhadoAreaExterna: Telhado
    /* composição casa e parede*/
    paredeQuarto: Parede        
    paredeBanheiro: Parede
    paredeCozinha: Parede
    /*agregação */
    espelhoCorredor: Espelho

class Parede {
    public Altura (){
    }
    public Largura (){
    }
    public Acabamento (){
    }
}

class Telhado {
    public TipoTelha (){

    }
    public Area (){

    }
}
class Espelho {
    public TipoVidro (){

    }
    public Altura (){

    }
    public Largura (){

    }
}

}