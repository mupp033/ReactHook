<?php

# FOR : CLI (Kamu bisa menggunakan web server tetapi akan timeout)

require 'src/IndiHome.php';
# run like this
$indihome = new IndiHome();
$indihome->run(1, true); # 1 = total, true can false if youw ant disable debugging

# Lihat class jika ingin informasi lebih jelas
