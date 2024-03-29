# React_And_Spring-Boot
### Build a Full Stack App - React and Java Spring Boot, Stripe Credit Card Payments, Spring Security, JWT, Spring Data JPA

### homepage
>The homepage display includes the homepage link in the navigation bar at the top of the page, book inquiries, problem feedback, user borrowing records, payment page, and administrator function interface.
>
>Except for the return to homepage and book search functions, other functions require login verification before they can be opened and displayed. The login function is located at the link button in the upper right corner of the page
>
>A new carousel mode is added to the homepage content to facilitate users to quickly view book items. Clicking on the reservation under a specific book will jump to the designated book introduction page. A simple introduction to common requirements and a quick guide function have been added at the bottom of the screen.
>
>There are also homepage return visits and book inquiry links at the end of the page.

![首頁1](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/ded2b617-9e39-44d8-9123-67ade695fb3c)
![首頁2](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/a3a2f0a3-507a-4008-a0f5-fa3a09f7fbdb)

### Search books
>`Search books` function: You can search all book information on this page. Each information will provide the book picture, author, book title and content introduction.
For detailed content and book borrowing related functions, you can click `View Details` for guidance.
>
>At the same time, a search bar is added above to search for specific books. Category searches are also provided, including Front End, Back End, Data and DevOps.

![書籍搜尋頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/31fab931-cd3a-4fea-b9e1-569d3452cacc)

### View Details
>`View Details` function: in addition to basic book information, book rating stars are also added. On the right side of the screen, the book borrowing function, current book inventory information, the number of books currently borrowed by the user, and the number that can be borrowed (each user can be borrowed at most simultaneously Borrow 5 books), you can also leave messages and give ratings. Relevant comment information is displayed at the bottom of the screen, and detailed comment information inquiry is also provided.

![書籍介紹以及借用頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/ce6774d2-8e0d-4d20-83fc-e8ede5e12614)

### Message
>`Message` function page: Users can ask questions to the administrator and fill in the question title and details (this function is only available to users who have logged in and verified)
>
>Users can also view question records in Q/A Response/Pending, which lists each question information and the administrator's response.

![提問頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/d166c1f3-49b5-459c-b215-1662596ab967)
![提問進度確認頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/5d24c20e-db7a-4180-9ece-6e8f8174bc9e)

### Loan
>On the `Loan` page, all books that have been borrowed are listed. At the same time, return and re-borrow functions are provided for each book. Please note that the re-borrow function must be within the specified return time, otherwise the function will be disabled.
>
>In addition, you can also view all the books that have been borrowed and returned in the history record. The details include the book picture, name, author, borrowing time and return time.

![已借用書籍頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/319b76ff-0491-4e3a-8cea-332cf938a102)
![書籍歸還以及延長時間彈跳視窗](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/9faf44e9-fefc-483b-90bf-7b5fa00d0c0b)
![書籍借用以及歸還歷史紀錄](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/f43148b5-863f-46d1-afef-30a21b92c0d8)

### Pay
>You can check the current unpaid amount on the `Pay fees` page. This amount is the accumulated amount due to overdue book borrowing and is not returned. It will be calculated by itself in the internal system. The payment method is through credit card.
>
![延遲付款頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/b82d0bfb-1816-48cf-8aee-11faa5261393)

### Administrator management
>`Add new books`: Only administrators can enter this page. Administrators can add new book information. All the fields below need to be filled in, including book title, author, category, content introduction, quantity and pictures.

![管理員新增書籍頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/dcdc2d35-6c90-4d44-8063-a8f57078d626)

>`Book editing`: Administrator rights can modify the number of books on this page. There are buttons to increase or decrease the number, or the function of deleting books. This function is only available to administrators.

![管理員修改書籍頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/5b02a992-0053-4e57-b6b9-c4ab8795e68d)

>`Q&A responses`: All customer feedback questions are listed on this page, and administrators can respond to them uniformly on this page.

![管理員回覆提問頁面](https://github.com/kash7452017/React_And_Spring-Boot/assets/101872264/65f32585-5e2b-400d-a548-3021ebb9fd03)
