import mongoose from 'mongoose';

//pre-event-registered-user-schema-model

const p_e_r_userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true }); 


const P_E_R_User = mongoose.model('P_E_R_User', p_e_r_userSchema);

export default P_E_R_User;
