const controllers = module.exports;
const io = require('socket.io');

const {v4: uuidv4} = require('uuid');
// const {ExpressPeerServer} = require('peer');



controllers.get = async (req, res) =>{    

    res.redirect(`/${uuidv4()}`);
}

controllers.room = async (req, res) =>{    
    
    res.render('index', {title: 'express', roomId: req.params.roomId});
}