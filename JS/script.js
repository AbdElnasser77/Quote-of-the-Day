    var quote = '';

    var quotes = 
    [ 
        '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe."- Albert Einstein',
        '"So many books, so little time."- Frank Zappa',
        '"A room without books is like a body without a soul."- Marcus Tullius Cicero',
        '"You only live once, but if you do it right, once is enough." - Mae West',
        '"Be the change that you wish to see in the world."- Mahatma Gandhi',
        '"Be yourself; everyone else is already taken."- Oscar Wilde'
    ];

    function randomQuote(){
        
        var n = Math.ceil(Math.random() * quotes.length-1);
            document.getElementById('quote').innerHTML = quotes[n];
        
    }