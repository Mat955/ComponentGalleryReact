var elements = [{
        id: 1,
        title: 'Counter Strike',
        desc: 'Game ‎first-person shooter',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81L8-mjNlrL._SX342_.jpg'
    },
    {
        id: 2,
        title: 'Red redemption 2',
        desc: 'Western action-adventure game',
        img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'
    },
    {
        id: 3,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        img: 'https://images-na.ssl-images-amazon.com/images/I/51SaViMd5qL.jpg'
    },
    {
        id: 4,
        title: 'Krol Lew',
        desc: 'Film o krolu sawanny',
        img: 'https://www.bookhunter.pl/okladki/352/large/book_352_large_1.jpg'
    }
];

var ElementList = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        desc: React.PropTypes.string.isRequired,
        img: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            React.createElement('li', {},
                React.createElement(ElementListTitle, {
                    title: this.props.title
                }, ),
                React.createElement(ElementListDesc, {
                    desc: this.props.desc
                }, ),
                React.createElement(ElementListImg, {
                    img: this.props.img
                })
            )
        )
    }
});

var ElementListTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var ElementListDesc = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});

var ElementListImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired
    },

    render: function () {
        return (
            React.createElement('img', {
                src: this.props.img
            })
        )
    }
});

var ElementsTypes = React.createClass({
    propTypes: {
        elements: React.PropTypes.array.isRequired
    },

    render: function () {
        var allElements = this.props.elements.map(function (elementList) {
            return React.createElement(ElementList, {
                key: elementList.id,
                title: elementList.title,
                desc: elementList.desc,
                img: elementList.img
            }, );
        });
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'List of The Best Games & Films'),
                React.createElement('ul', {}, allElements)
            )
        )
    }
});

var renderElement = React.createElement(ElementsTypes, {
    elements: elements
});

ReactDOM.render(renderElement, document.getElementById('app'));