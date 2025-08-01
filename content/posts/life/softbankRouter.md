+++
title = 'Softbank Hikari + your own router'
date = 2025-08-01T21:00:00+09:00
draft = false
type = "post"
description = "Just created this post for other anxious dummies lost in r/japanlife posts and「Wi-Fiルーター5選！後悔しない選び方」sort of videos. It's gonna work, the speed will be mediocre, but it's OK.."
image = ""
imageBig = ""
categories = ["technology", "life"]
authors = ["Dan Sokolov"]
avatar = "/images/avatar.webp"
+++

Long time no post! I have moved recently, this also means that I have another ISP now. I am using Softbank (it was offered to me by my 管理会社) and, long story short, if you don't renting their BB-unit for ~700 yen per month, you won't be able to use anything other than PPPoE, no IPv6 use at all. I bought an Aterm NEC router, so I am in that boat too.

This means that you WILL STUCK at speeds like 100 Mbps, especially if you are on 1 Gig plan (it seems that to to get speeds faster than 1 Gbps, you need to be on 10 Gbps plan).

If you are okay with this, then the process of setting up the home network is going to be like this:

1. Softbank sends you a NTT-modem.
2. On the day when the service starts, you plug it into the wall, then connect it to your own router by Ethernet cable. The date and the time are specified on some of the papers they send you. For me, the time was 8:00 to 12:00, but in fact it didn't work until 11:00-ish. I was worried, but then it suddenly just worked.
3. You access the router's settings (192.168.0.1 or any other address, specified in the manual accompanying your router), and entering the name and the password Softbank provided you with.
4. Then it just works.

That's it. I think I am going to update this blog more often now.