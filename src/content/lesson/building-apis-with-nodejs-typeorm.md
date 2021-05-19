---
title: "Conectando una base de datos a nuestra API REST"
subtitle: "TypeOrm  permite construir API REST de una forma rápida, minimalista y flexible"
cover_local: "../../assets/images/node-typeorm.png"
textColor: "white"
date: "2021-04-17T16:36:31+00:00"
status: "draft"
tags: ["typeOrm","Expressjs","nodejs","REST","API"]

---
## ¿Qué es SQL TypeOrm?

`BORRAR: https://medium.com/@odnanref.a8/breve-tutorial-de-express-js-typeorm-revisado-caa59731e4ea`


TypeORM es un [Object-Relational Mapper / Mapping-tool](https://en.wikipedia.org/wiki/Object-relational_mapping), o un ORM, es decir una librería que los desarrolladores utilizan para crear bases de datos y manipular sus datos sin la necesidad de conocer / usar SQL.


## ¿Porqué usar un ORM?

Los ORM han ganado popularidad debido a que lidiar con el lenguaje SQL directamente requiere de mucho esfuerzo en la mayoría de los casos. El objetivo del ORM entonces es simplificar la mantención de tus datos.

Básicamente, con un ORM no tendrás que escribir SQL otra vez (95% del tiempo) y podrás trabajar con objetos.

### Por ejemplo:

Para insertar un usuario con SQL tienes que escribir:

```sql
INSERT INTO user (name, last_name) VALUES ('Juan', 'McDonals');
```

Con un ORM tu código sigue siendo un código familiar como este:

```javascript
user = User()
user.name = 'Juan'
user.last_name = 'McDonals'

# agrega el user a la base de datos
user.save();

```

Basta con que digas: `user.save()` y todo lo que hayas hecho con tu código se traducirá a código de lenguaje SQL.

## Decoradores
TypeOrm utiliza el patrón de diseño llamado decorador para modificar el comportamiento de una clase.  Estos decoradores nos sirven para definir los elementos de un modelo, como crear una columna, definir si tiene una llave primaria,etc.   

Para construir nuestro modelo utilizaremos los siguientes decoradores que nos proporciona typeOrm.

- `@Entity()`: Al usar este decorador, se crea una clase que asigna a una tabla de base de datos.  

- `@PrimaryGeneratedColumn()` :Indica que la columna es Primary Key y que su valor debe ser autoincrementado. Es posible pasarle un parámetro (‘uuid’) que hace que los valores de esta columna sean cadenas de texto aleatorios en lugar de números enteros secuenciales.

- `@Column()`: Una columna común y corriente de la base de datos. Podemos especificar varios parámetros como el tipo (varchar, int, tinyint, decimal), si es obligatoria (nullable: true | false), la longitud máxima (length: int) y muchas cosas más.
[Ver Documentación](https://typeorm.io/#/entities/column-options)

- `@CreateDateColumn() y @UpdateDateColumn()`: Son decoradores especiales que indican que el valor de estas columnas se asigna automáticamente al crear un nuevo registro o al actualizar uno ya existente respectivamente.



## Revisemos la operación de base de datos más típica

### Creando nuestra base de datos

El primer paso sería definir nuestro modelo


```javascript
@Entity()
export class Users extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;
  
}
```

### INSERT: Insertando un registro en la base de datos

```javascript

	const usersRepo = getRepository(User);
	const user = usersRepo.create(req.body as ObjectLiteral);  //Creo un usuario
	
	const result = await usersRepo.save(user); //Grabo el nuevo usuario 

  ```

### SELECT: Buscando o recuperando registros

Hay 3 formas para devolver data de la base de datos:
    1. Buscar/Recuperar/Devolver todo los registros desde un Table/Model en particular usando `getRepository(MyModel).find()`
    2. Buscar/Recuperar/Devolver un solo registro basado en su primary key usando `getRepository(MyModel).findOne()` 
    3. Buscar/Recuperar/Devolver un grupo de registro basado en su consulta `Person.query.filter_by(arg1=value, arg2=value, ...)`

```javascript
# aqui es como se buscan todas las personas
const users = await getRepository(Users).find();

# aqui es como se busca un grupo de personas con name = alex
const users = await getRepository(Users).find("first_name":"alex");

# aquí es cómo se busca a una persona con id = 3 (solo funciona con las primary key)
user = Users.query.get(3)
const user = await getRepository(Users).findOne(req.params.id:"3");
```

### DELETE: Eliminando un registro de la base de datos.

Todo lo que tiene que hacer es crear un nuevo objeto Person, agregarlo a la sesión de la base de datos y ¡commit!

```javascript
const users = await getRepository(Users).delete(ID_USER);

  ```

### UDPATE: Actualizar un registro.

Para actualizar, primero necesitas devolver/seleccionar el registro de la base de datos, luego puedes actualizar la propiedad que desees y hacer commit nuevamente.
```javascript
	const user = await getRepository(Users).findOne(req.params.id); //Busco el usuario en la tabla por el ID recibido
	getRepository(Users).merge(user, req.body);  // Hace un merge de los datos existentes con los que se reciben a través de body
	const results = await getRepository(Users).save(user);  // Almacena el cambio en la base de datos
```



## Relaciones
### Uno a uno
En ingles one-to-one se utiliza el decorador `@OneToOne`,es una relación en la que A contiene una instancia de B y B contiene una instancias de A.  


### Muchos a uno
En ingles many-to-one se utiliza el decorador `@ManyToOne` 


### Uno a muchos
En ingles one-to-many se utiliza el decorador `@OneToMany` 


### Muchos a muchos
En ingles Many-to-many se utiliza el decorador `@ManyToMany`,es una relación en la que A contiene varias instancias de B y B contiene varias instancias de A. 

Un ejemplo es la relación existente entre una entidades Pregunta con otra Categoría. Una pregunta puede tener varias categorías y cada categoría puede tener varias preguntas.

```javascript
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

}

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    text: string;

    @ManyToMany(() => Category)
    @JoinTable()
    categories: Category[];

}
```
`@JoinTable()` se utiliza para definir la entidad propietaria en la relación. Ene ste ejemplo se debe utilizar el decorador `@ManyToMany`.

- Para almacenar una relación `@ManyToMany`: a continuación veremos une ejemplo donde se crean las instancias de las categorías y luego se asignan como un array a la entidad `Question`

```javascript
const category1 = new Category();
category1.name = "animals";
await connection.manager.save(category1);

const category2 = new Category();
category2.name = "zoo";
await connection.manager.save(category2);

const question = new Question();
question.title = "dogs";
question.text = "who let the dogs out?";
question.categories = [category1, category2];
await connection.manager.save(question);
```
- Eliminar la una relación `@ManyToMany`:

Con las cascadas habilitadas, puede eliminar esta relación con solo una llamada de guardado.
Para eliminar una relación de varios a varios entre dos registros, elimínela del campo correspondiente y guarde el registro.

```javascript
const question = getRepository(Question);
question.categories = question.categories.filter(category => {
    category.id !== categoryToRemove.id
})
await connection.manager.save(question)
```

## ¿Listo para empezar a codificar?

Hemos preparado este ejemplo de codificación en vivo que puede ejecutar tu mismo en Gitpod y utilizarlo como base para su proyecto.

Expressjs Rest Hello: [https://github.com/4GeeksAcademy/expressjs-rest-hello](https://github.com/4GeeksAcademy/expressjs-rest-hello)
