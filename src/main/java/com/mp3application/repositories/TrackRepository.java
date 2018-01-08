/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mp3application.repositories;

import com.mp3application.models.Track;
import org.springframework.data.jpa.repository.JpaRepository;


/**
 *
 * @author Kim
 */
public interface TrackRepository extends JpaRepository<Track, Long>{
    
}
