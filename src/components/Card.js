export class Card extends HTMLElement {


    constructor({name, type, cost, description, image}) {
        super();
        this.name = name;
        this.type = type;
        this.cost = cost;
        this.description = description;
        this.image = image;
        this.flipped = false;

        //create the card element
        const shadow = this.attachShadow({mode: 'open'});
        this.article = document.createElement('article');
        const style = document.createElement('style');
        style.textContent = `
    .card {
    position: relative;
    width: 200px;
    padding: 12px 10px;
    background: #fff;
    border: 2px solid #333;
    border-radius: 10px;
    font-family: 'Segoe UI', sans-serif;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    transform-style: preserve-3d;
    transition: transform 0.6s;

}

.card.flipped {
    transform: rotateY(180deg);
}

.card-front, .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
}

.cost {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 40px;
    height: 40px;
    background: rgb(218, 113, 37);
    color: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-weight: bold;
    font-size: 16px;
    border: 2px solid #fff;
}

.name {
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    margin-top: 4px;
    margin-bottom: 4px;
}



.image-container {
    width: 100%;
    height: 120px;
    background: #eee;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin-bottom: 10px;
    box-sizing: border-box;
    margin-block-start: 0.1em;
    margin-block-end: 0.3em;
    margin-inline-start: 1px;
    margin-inline-end: 1px;
}

.image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: scale-down;
}


.effect {
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 6px;
    color: #222;
}

.description {
    text-align: center;
    font-size: 14px;
    color: #444;
}


@keyframes dealCard {
    0% {
      transform: scale(0.8) rotate(-5deg);
      opacity: 0;
    }
    50% {
      transform: scale(1.05) rotate(5deg);
      opacity: 1;
    }
    80% {
      transform: scale(0.98) rotate(-2deg);
    }
    100% {
      transform: scale(1) rotate(0);
    }
  }
  
  .card.dealing {
    animation: dealCard 0.6s ease-out forwards;
  }
`;

        this.article.className = 'card';

        shadow.append(this.article);
        shadow.append(style);
    }


    flipCard() {
        this.flipped = !this.flipped;
        if (this.flipped) {
            this.article.classList.add('flipped');
        } else {
            this.article.classList.remove('flipped');
        }
    }

    /**
     * render the card in specific HtmlElement
     */
    render() {
        this.article.innerHTML=`
        
        <span class="cost">${this.cost}</span>
    
        <header class="name">${this.name}</header>
    
        <figure class="image-container">
            <img src="${this.image}" alt="${this.name}">
        </figure>
    
        <section class="effect">null</section>
    
        <footer class="description">${this.description}</footer>
`;
        requestAnimationFrame(() => {
            this.article.classList.add('dealing');
        });

    }

    /**
     * A virtual function to be overridden by subclasses.
     * @param enemy
     */
    play(enemy) {
    }

}

customElements.define('my-card', Card)
