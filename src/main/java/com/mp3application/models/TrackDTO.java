/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mp3application.models;

/**
 *
 * @author Kim
 */
public class TrackDTO {
    
    private Long id;
    private String title;
    private String artist;
    private String album;
    private Integer length;
    private Integer year;

    public TrackDTO(Long id, String title, String artist, String album, Integer length, Integer year) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.length = length;
        this.year = year;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getAlbum() {
        return album;
    }

    public Integer getLength() {
        return length;
    }

    public Integer getYear() {
        return year;
    }
    
    
    
}
