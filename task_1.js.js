/* 1. Дан код.
 Почему код даёт именно такие результаты?*/

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  /* ++a - означает что мы к переменной а прибавляем единицу */
d = b++; alert(d);           // 1  /* ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее значение переменной */
c = (2 + ++a); alert(c);     // 5  /* т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 2. В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5 *
d = (2 + b++); alert(d);     // 4  /* т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 2. В данном примере прибавляем еще единицу и а становится равно 3, но выводим предыдущее значение т.е. 2, отсюда получаем 4 */
alert(a);                    // 3  /* прибавили единицу в примере 1 и примере 3 */
alert(b);                    // 3  /* прибавили единицу в примере 2 и примере 4 */


