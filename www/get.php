<?php
$list = array(
   'Новость 7',
   'Новость 8',
   'Новость 9',
   'Новость 10',
   'Новость 11',
   'Новость 12',
   'Новость 13',
   'Новость 14',
   'Новость 15',
);

$page = $_GET['page'];

$count = 3;
if (($page * $count) > count($list)) {
    echo '';
} else {
    $result = '';
    for ($i = ($page - 1) * $count; $i < $page * $count; $i++) {

       sleep(2);
       $result .= '<li class="new">' . $list[$i] . '</li>';
    }
    echo $result;
}
?>