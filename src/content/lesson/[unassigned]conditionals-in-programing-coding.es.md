---
slug: "conditionals-in-programing-coding"
title: "Condicionales en la programación o codificación"
subtitle: "Uso de condiciones para controlar el flujo de su código y hacer que la computadora obedezca"
date: "2017-09-24"
status: "unassigned"
cover: "https://ucarecdn.com/4cc6fa0b-2530-4052-aa7e-8dac03788ac3/"
textColor: "white"
tags: ["conditionals", "logical operations", "if else", "conditions"]
---

Dominar el uso de las condiciones es una de las 5 habilidades fundamentales de construir algoritmos:

1. Variables.
2. `Condicionales`.
3. Arrays(Arreglos).
4. Loops(Bucles).
5. Funciones.

Las condiciones son la única forma en que los desarrolladores tienen que decirle a la computadora cómo tomar decisiones en tiempo real, muy similar a cómo funcionan los cerebros.

Digamos que estamos construyendo un programa para ayudarnos a elegir qué almacenar y odiamos el color azul, podemos decirle a la computadora que evite el azul usando una condición como esta:
  
  
`If` ***color*** is not **blue**, then... do something.  
`Else`... do nothing or exit.
  
![Condicionales](https://ucarecdn.com/e73b673e-d744-45a7-a1ed-61a1dae49560/)

Y así es como escribiríamos esto en Javascript:

```js
if(color != 'blue'){
    //Cualquier código aquí se ejecutará cuando el color sea diferente al azul.
}
else{
    //solo ejecutará este código si el color no es azul.
}
```

## Se trata de qué preguntas hacer

El ejemplo anterior era una condición simple, pero en la vida real, elegir qué hacer implica una combinación de varias condiciones para tomar la decisión final, por ejemplo: Veamos este algoritmo que le dice a una computadora cómo decidir qué ponerse durante el día de San Valentín:

![What ot ware in valentines day](https://ucarecdn.com/87f2be86-32c3-4bfc-8db4-dbd0d979e4d3/)

Si quieres representar este algoritmo en Javascript, se verá algo así:

```js
if(goingOut == true){
    if(canIGetBurger == true){
        
    }
}
```
