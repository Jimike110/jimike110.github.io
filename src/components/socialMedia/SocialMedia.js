import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

export default function socialMedia() {
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.gitlab && (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-gitlab"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-google"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-x-twitter"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.facebook && (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.telegram && (
        <a
          href={socialMediaLinks.telegram}
          className="icon-button telegram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-telegram"></i>
          <span></span>
        </a>
      )}
      {socialMediaLinks.vk && (
        <a
          href={socialMediaLinks.vk}
          className="icon-button vk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-vk"></i>
          <span></span>
        </a>
      )}
    </div>
  );
}
