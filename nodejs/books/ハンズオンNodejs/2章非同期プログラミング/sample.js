//エラーハンドリング

function parseJSONAsync(json, callback) {
  setTimeout(() => {
    try {
      callback(JSON.parse(json));
    } catch (err) {
      callback(err);
    }
  }, 1000);
}

parseJSONAsync("{a: 1}");
