console.log("Ejercicio 2");
/* 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
Mostrar todos los Nodos que superen un valor determinado. */

// Definición de la clase Nodo
class Nodo {    
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

// Definición de la clase ListaEnlazada
class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Método para insertar un nodo al final de la lista
    insertarAlFinal(valor) {
        const nuevoNodo = new Nodo(valor);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let nodoActual = this.cabeza;
            while (nodoActual.siguiente) {
                nodoActual = nodoActual.siguiente;
            }
            nodoActual.siguiente = nuevoNodo;
        }
    }

    // Método para mostrar todos los nodos que superen un valor determinado
    mostrarNodosSuperiores(valorDeterminado) {
        let nodoActual = this.cabeza;
        while (nodoActual) {
            if (nodoActual.valor > valorDeterminado) {
                console.log(nodoActual.valor);
            }
            nodoActual = nodoActual.siguiente;
        }
    }
}

// Función para generar números enteros positivos aleatorios
function numeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1; // Genera números aleatorios entre 1 y 100
}

// Crear dos listas enlazadas con números enteros positivos aleatorios
const lista1 = new ListaEnlazada();
const lista2 = new ListaEnlazada();

for (let i = 0; i < 10; i++) {
    lista1.insertarAlFinal(numeroAleatorio());
    lista2.insertarAlFinal(numeroAleatorio());
}

// Mostrar todos los nodos que superen un valor determinado (por ejemplo, 50)
console.log("Nodos de la lista 1 que superan el valor 50:");
lista1.mostrarNodosSuperiores(50);

console.log("Nodos de la lista 2 que superan el valor 50:");
lista2.mostrarNodosSuperiores(50);

console.log("Ejercicio 1");

/* 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia. */
class Nodo2 {
    constructor(dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}

class ListaEnlazada2 {
    constructor() {
        this.cabeza = null;
    }

    insertarAlFinal(dato) {        
        // Si la lista está vacía, crea el primer nodo con el dato dado
        if (!this.cabeza) {
            this.cabeza = new Nodo2(dato);
            return;
        }

        let actual = this.cabeza;
        // Itera hasta llegar al último nodo de la lista
        while (actual.siguiente) {
            // Si encuentra que el dato ya está en la lista, no lo inserta
            if (actual.dato === dato) {
                console.log("El dato ya está en la lista, no se inserta.");
                return;
            }
            actual = actual.siguiente;
        }
        // Inserta el nuevo nodo al final de la lista
        actual.siguiente = new Nodo2(dato);
    }

    mostrarLista() {
        let actual = this.cabeza;
        while (actual) {
            console.log(actual.dato);
            actual = actual.siguiente;
        }
    }
}

// Ejemplo de uso
let lista = new ListaEnlazada2();
lista.insertarAlFinal(3);
lista.insertarAlFinal(5);
lista.insertarAlFinal(7);
lista.insertarAlFinal(5); // No se insertará porque 5 ya está en la lista
lista.mostrarLista();

