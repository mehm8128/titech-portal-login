# titech-portal-login

## 使い方

1. convert.js の string 変数にマトリクスコードの文字列を入れ(注 1)、`node convert.js`で配列たちが文字列で出力されるのでそれを matrix.js の matrixList 配列に入れる。
1. 学生番号とパスワードと URL を入力。
1. chrome://extensions にアクセスし、「パッケージ化されていない拡張機能を読み込む」からこのフォルダを選択。

注 1.  
abcd  
efgh  
ijkl  
といったマトリクスコードなら abcdefghijkl という風に、左上から下に進む向きで羅列していく。
