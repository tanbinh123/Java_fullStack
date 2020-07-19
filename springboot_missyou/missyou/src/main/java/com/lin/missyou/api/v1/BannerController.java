package com.lin.missyou.api.v1;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
public class BannerController {
    //MVC SpringMVC
    //Controller Model View

    @GetMapping("/test")
    @ResponseBody
    public String test(){
//            response.getWriter().write("Hello World!");
        return "Hello World!";
    }
}
