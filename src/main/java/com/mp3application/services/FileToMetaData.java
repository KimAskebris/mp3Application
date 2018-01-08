package com.mp3application.services;

import com.mp3application.models.Track;
import com.mpatric.mp3agic.ID3v2;
import com.mpatric.mp3agic.Mp3File;
import java.io.File;

public final class FileToMetaData {
     
    private FileToMetaData(){}
    
    public static Track getTrack(File trackFile) {
        try {
            Mp3File track = new Mp3File(trackFile);
            
            if (track.hasId3v2Tag()) {
                ID3v2 tag = track.getId3v2Tag();
                String title = tag.getTitle();
                String artist = tag.getArtist();
                String album = tag.getAlbum();
                int year = Integer.parseInt(tag.getYear());
                int length = (int) track.getLengthInSeconds();
                return new Track(title, artist, album, length, year);
            }
        } catch (Exception e) {
            System.err.println(e.getMessage());
        }
        return null;
    }
}

