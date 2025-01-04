let currentStep = 0;
const totalSteps = 5;
const stepDuration = 4000; // 4 seconds per step

function resetAnimations() {
    document.querySelectorAll('.vertical-line').forEach(line => {
        line.style.animation = 'none';
        line.offsetHeight;
        line.style.animation = null;
    });

    document.querySelectorAll('.image-container img').forEach(img => {
        img.classList.remove('active');
    });
}

function animateSteps() {
    resetAnimations();
    
    // Show first image
    document.getElementById(`step-image-0`).classList.add('active');
    
    // Set up image changes
    for(let i = 0; i < totalSteps; i++) {
        setTimeout(() => {
            document.querySelectorAll('.image-container img').forEach(img => {
                img.classList.remove('active');
            });
            document.getElementById(`step-image-${i}`).classList.add('active');
        }, i * stepDuration);
    }

    // Restart the animation cycle
    setTimeout(animateSteps, totalSteps * stepDuration);
}

// Start animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    animateSteps();
});

// FAQ Section Animation
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.question');
    
    questions.forEach(question => {
        const answer = question.querySelector('.answer');
        const toggleIcon = question.querySelector('.faq-toggle-icon');
        
        // Initially hide all answers
        answer.style.maxHeight = '0';
        answer.style.opacity = '0';
        answer.style.overflow = 'hidden';
        toggleIcon.textContent = '+';

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px';
            
            // Close other answers
            questions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherAnswer = otherQuestion.querySelector('.answer');
                    const otherIcon = otherQuestion.querySelector('.faq-toggle-icon');
                    
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.opacity = '0';
                    otherQuestion.classList.remove('active');
                    otherIcon.textContent = '+';
                }
            });

            // Toggle current answer
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.opacity = '1';
                question.classList.add('active');
                toggleIcon.textContent = '−';
            } else {
                answer.style.maxHeight = '0';
                answer.style.opacity = '0';
                question.classList.remove('active');
                toggleIcon.textContent = '+';
            }
        });
    });
});
