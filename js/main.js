
        
        document.addEventListener('DOMContentLoaded', function() {
            const episodes = document.querySelectorAll('.podcast-episode');
            
            episodes.forEach(episode => {
                episode.addEventListener('click', function() {
                    
                    document.querySelectorAll('.episode-player-controls').forEach(controls => {
                        controls.style.display = 'none';
                    });
                    
                    
                    const controls = this.querySelector('.episode-player-controls');
                    controls.style.display = 'block';
                    
                    
                    const audio = controls.querySelector('audio');
                    const playBtn = controls.querySelector('.play-btn');
                    const playIcon = controls.querySelector('.play-icon');
                    
                    playBtn.addEventListener('click', function(e) {
                        e.stopPropagation(); 
                        
                        if (audio.paused) {
                            audio.play();
                            playIcon.textContent = '⏸';
                        } else {
                            audio.pause();
                            playIcon.textContent = '▶';
                        }
                    });
                    
                    
                    audio.addEventListener('timeupdate', function() {
                        const progressFill = controls.querySelector('.progress-fill');
                        const currentTime = controls.querySelector('.current-time');
                        const duration = audio.duration;
                        const currentPos = audio.currentTime;
                        
                        progressFill.style.width = (currentPos / duration) * 100 + '%';
                        currentTime.textContent = formatTime(currentPos);
                    });
                    
                    
                    function formatTime(seconds) {
                        let minutes = Math.floor(seconds / 60);
                        let secs = Math.floor(seconds % 60);
                        return minutes + ':' + (secs < 10 ? '0' : '') + secs;
                    }
                });
            });
        });
