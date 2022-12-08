function Book (title, description, author) {
    this.title = title
    this.description = description
    this.author = author
    this.id = title+' '+author

}


class Library {

    constructor(){
        this.books = []
    }

    addBook(infoLivro){
        let livro = new Book(infoLivro['title'], infoLivro['description'], infoLivro['author'])
        this.books.push(livro)
      
        return livro
    }

    getBooks(){
        return this.books
    }

    removeBookById(id){

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id){
                this.books.splice(i,1)
                console.log('livro ${id} foi removido com sucesso!')
                return
            }
        }

        console.log('livro ${id} não foi encontrado nesta biblioteca!')
    }

    getBookById(id){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                console.log('livro ${id} encontrado com sucesso!')
                return this.books[i]
            } 
        }

        console.log('livro ${id} não foi encontrado nesta biblioteca!')
    }

    updateBookById(id,novaInfo){
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                this.books[i].title = novaInfo['title']
                this.books[i].description = novaInfo['description']
                this.books[i].author = novaInfo['author']

                console.log('Biblioteca atualizada!')
                return this.books[i]
            } 
        }
        console.log('livro ${id} não foi encontrado nesta biblioteca!')

    }


}   


bibli = new Library()

bibli.addBook({title: 'Assassinato no Expresso do Oriente', description: 'Um mói de gente morre em um trem', author: 'Aghata Cristie'})
bibli.addBook({title: 'Morte no Nilo', description: 'Um mói de gente morre em um barco', author: 'Aghata Cristie'})

console.log(bibli.getBooks())

bibli.getBookById('Assassinato no Expresso do Oriente Aghata Cristie')
bibli.removeBookById('Assassinato no Expresso do Oriente Aghata Cristie')
bibli.getBookById('Assassinato no Expresso do Oriente Aghata Cristie')

console.log(bibli.getBooks())

bibli.updateBookById('Morte no Nilo Aghata Cristie', {title: 'teste', description: 'teste', author: 'teste'})

console.log(bibli.getBooks())
