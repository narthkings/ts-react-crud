import 'izitoast/dist/css/iziToast.min.css'
import iZtoast from 'izitoast'

const toast = {
  error: (message: string, title = 'Error') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: 'topRight',
    })
  },

  sorry: (message: string, title = 'Sorry!') => {
    return iZtoast.error({
      title: title,
      message: message,
      position: 'topRight',
    })
  },

  success: (message: string, title = 'Success') => {
    return iZtoast.success({
      title: title,
      message: message,
      position: 'topRight',
    })
  },

  info: (message: string, title = '') => {
    return iZtoast.info({
      title: title,
      // timeout: 200000,
      message: message,
      position: 'topRight',
    })
  },

  destroy: () => {
    return iZtoast.destroy()
  },
}

export default toast