import User  from '../../api/user/model';

const Query = {
    ping: () => 'Pong',
    ding: () => 'Dong',
    users: () => User.find({})
}

export default Query;