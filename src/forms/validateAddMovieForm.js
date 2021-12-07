import MovieClass from '../class/MovieClass'
import Movies from '../components/Movies'
validateAddMovieForm=(movie)=>{
    var message=[]
    if(movie.title===""){
        message.push("Pole obowiązkowe. Wpisz tytuł filmu")
    }
    else if(movie.title.length<=1)
    message.push("Tytuł jest za krótki. Wpisz wyraz zamierający co najmniej 2 litery")
    else if(!movie.title[0].toUpperCase())
    message.push("Niepoprawna nazwa, podaj tytuł zaczynając od wielkiej litery/liczby")
    else if(movie.duration<30)
    message.push("Czas trwania jest za krótki, podaj wartość większą niż 30")
}