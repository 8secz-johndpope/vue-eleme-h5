//输出通用axios实例
import axios from 'axios';
 
const instance = axios.create({
  timeout: 10000,
   headers: {
    'Content-Type': "application/json;charset=utf-8"
  }
});
 
export default {
  userLogin ( data ) {
    return instance.post('/api/user/login', data);
  },
  allUser () {
    return instance.post('/api/user');
  },
  allProduct () {
   return instance.post('/api/product')
  },
  upload (data) {
    return instance.post('/api/upload',data)
  },
  getEmojiData (data){
  	return instance.post('/api/yiluxiangbei87110/vue-chat/blob/master/static/emojiDB.json')
  }
};