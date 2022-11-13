import mongoose from "mongoose"

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
})

export default mongoose.model('Users', User) // 'Users' untuk nama schema. User isi schema dari yang telah dibuat