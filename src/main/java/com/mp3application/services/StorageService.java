/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mp3application.services;

import java.io.File;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Kim
 */
public interface StorageService {
    
    void init();
    
    File store(MultipartFile file);
}
