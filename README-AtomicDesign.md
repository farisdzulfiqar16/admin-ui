IMPLEMENTASI ATOMIC DESIGN
PROJECT : FINEBANK
NIM     : A11.2021.13554
NAMA    : FARIS DZULFIQAR
KELAS   : A11.4703
================================

1. Page: SignIn
   Layout  : AuthLayout
   Fragment: FormSignIn
   Element : Logo, LabeledInput, CheckBox, Button

2. Page: SignUp
   Layout  : AuthLayout
   Fragment: FormSignUp
   Element : Logo, LabeledInput, CheckBox, Button

3. Page: Dashboard
   Layout  : MainLayout
   Fragment: CardBalance, CardGoal, CardStatistic,
             CardUpcomingBill, CardRecentTransaction,
             CardExpenseBreakdown
   Element : Card, Button, Icon, CompositionExample

4. Page: Transaction
   Layout  : MainLayout
   Fragment: CardRecentTransaction
   Element : Card, Button, Icon

5. Page: Bill
   Layout  : MainLayout
   Fragment: CardUpcomingBill
   Element : Card, Button, Icon

6. Page: Expense
   Layout  : MainLayout
   Fragment: CardExpenseBreakdown, CardStatistic
   Element : Card, Button, Icon

7. Page: Balance
   Layout  : MainLayout
   Fragment: CardBalance
   Element : Card, Icon

8. Page: Goal
   Layout  : MainLayout
   Fragment: CardGoal
   Element : Card, Icon, CompositionExample

9. Page: Setting
   Layout  : MainLayout
   Fragment: -
   Element : Button, CheckBox

================================

Catatan:
Beberapa halaman masih berupa struktur UI dan routing saja