import Product from '../models/product';

const PRODUCTS = [
    new Product(
        'p1',
        'u1',
        'Bánh mì thịt',
        'https://cdn.tuoitre.vn/thumb_w/586/2019/6/8/logo-623741494277046013995629181216799700549632n-1559957486759369602389.jpg',
        'Bánh mì kẹp thịt nguội đặc trưng với chút patê, dưa leo, hành ngò, đồ chua là cà rốt và củ cải ngâm rồi vắt ráo, sốt mayonnaise tự làm của quán.',
        15.000
    ),
    new Product(
        'p2',
        'u1',
        'Bánh mì thịt nguội',
        'https://cdn.tuoitre.vn/thumb_w/586/2019/6/3/banhmihoama-15595471908191493222620.jpg',
        'Ở đây, thịt nguội lại được làm nóng khi cho vào chảo ốp la trứng vừa chín tới, cùng với hành tây, tiêu và tương ớt.',
        20.00
    ),
    new Product(
        'p3',
        'u2',
        'Bánh mì thịt nướng',
        'https://cdn.tuoitre.vn/thumb_w/586/2019/6/3/banhmi37nguyentrai-1559547227655536677256.jpg',
        'Yếu tố làm cho bánh mì này ngon lại nằm ở nước xốt và cách ướp gia vị rất vừa vặn. Thịt được nướng tại chỗ, ai đi qua cũng thấy nên càng tăng phần hấp dẫn.',
        20.00
    ),
    new Product(
        'p4',
        'u3',
        'Bánh mì Huỳnh Hoa',
        'https://cdn.tuoitre.vn/thumb_w/586/2019/6/6/banh-mi-huynh-hoa-1559816191838361029245.png',
        "Bánh mì được nướng nóng giòn và bí quyết để bánh mì giòn lâu là phết sốt và pate vào giữa các lớp thịt nguội chứ không phết trực tiếp lên bánh mì.",
        15.00
    ),
    new Product(
        'p5',
        'u3',
        'Bún chả ngõ 74 Hàng Quạt',
        'https://cdn.jamja.vn/blog/wp-content/uploads/2019/03/bun-cha-ngo-74-hang-quat-1.jpg',
        'Bún chả là món ăn ngon, quen thuộc của người dân Hà Nội, đây cũng là đặc sản, niềm tự hào của Hà Nội dành cho các du khách tới thăm. Nếu đã đến Hà Nội, bạn chắc chắn phải thử các món bún, phở, bánh cuốn tại đây.',
        30.00
    ),
    new Product(
        'p6',
        'u1',
        'Bún chả Bát Sứ',
        'https://cdn.jamja.vn/blog/wp-content/uploads/2019/03/bun-cha-bat-su.jpg',
        "Bún chả Bát Sứ là địa chỉ hấp dẫn dành cho các bạn sống tại khu vực Hoàn Kiếm, hoặc một ngày đi chơi bờ Hồ, đói quá các bạn có thể dễ dàng rẽ vào phố Bát Sứ để thưởng thức một tô bún chả cho ấm bụng.",
        50.00
    )
];

export default PRODUCTS;

