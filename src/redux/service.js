import axios from 'axios'

export default function helloWold() {
    axios.get('http://localhost:4000/helloWold')
        .then(res => { console.log('hello', JSON.stringify(res.data)) }).catch(
            err => { console.log(err); }
        )

}