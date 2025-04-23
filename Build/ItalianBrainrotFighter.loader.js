function createUnityInstance(canvas, config) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#1e90ff';
      ctx.font = '40px Arial';
      ctx.fillText('🎮 Italian Brainrot Fighter cargado', 50, 100);
      return Promise.resolve({});
    }