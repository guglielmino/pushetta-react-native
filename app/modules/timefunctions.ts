const formatDate = (dateString: string) => {
    const now = new Date();
    const expire = new Date(dateString);
    let ret = '-';
    const expireTime: Number = +expire - +now;
    if (expireTime < 1000 * 60 * 60 * 24) {
      ret = `expire in ${Math.round(+expireTime / (1000 * 60 * 60))} hours`;
    } else if (expireTime < 1000 * 60 * 60 * 24 * 15) {
      ret = `expire in ${Math.round(+expireTime / (1000 * 60 * 60 * 24))} days`;
    } else {
      const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
      ret = `expire on ${expire.toLocaleDateString('en-US', options)} `;
    }
    return ret;
  }
